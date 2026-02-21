import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  NgZone,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-space-background',
  standalone: true,
  template: '<div #canvas class="space-bg"></div>',
  styles: [
    `
      .space-bg {
        position: fixed;
        inset: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class SpaceBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private animationFrameId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private isDestroyed = false;

  private mouseTarget = { x: 0.5, y: 0.5 };
  private mouseCurrent = { x: 0.5, y: 0.5 };
  private cameraOffset = { x: 0, y: 0 };
  private cameraTargetOffset = { x: 0, y: 0 };

  private readonly PARALLAX_LERP = 0.08;
  private readonly CAMERA_EASE = 0.05;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.initScene();
    this.setupResizeObserver();
    this.setupMouseListeners();
    this.ngZone.runOutsideAngular(() => this.animate());
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('mousemove', this.onMouseMove);
    if (this.resizeObserver && this.canvasRef?.nativeElement) {
      this.resizeObserver.disconnect();
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    }
    if (this.particles?.geometry) this.particles.geometry.dispose();
    const mat = this.particles?.material;
    if (mat) (Array.isArray(mat) ? mat : [mat]).forEach((m) => m.dispose());
  }

  private initScene(): void {
    const container = this.canvasRef.nativeElement;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0e17);

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 5);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x0a0e17, 1);

    const canvas = this.renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);

    const count = 800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x38b28b,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    this.particles = new THREE.Points(geo, mat);
    this.scene.add(this.particles);
  }

  private setupResizeObserver(): void {
    const container = this.canvasRef.nativeElement;
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const e of entries) {
        const { width, height } = e.contentRect;
        if (width > 0 && height > 0 && this.camera && this.renderer) {
          this.camera.aspect = width / height;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(width, height);
        }
      }
    });
    this.resizeObserver.observe(container);
  }

  private onMouseMove = (e: MouseEvent): void => {
    this.mouseTarget.x = e.clientX / window.innerWidth;
    this.mouseTarget.y = e.clientY / window.innerHeight;
  };

  private setupMouseListeners(): void {
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
  }

  private animate = (): void => {
    if (this.isDestroyed) return;
    this.animationFrameId = requestAnimationFrame(this.animate);

    this.mouseCurrent.x += (this.mouseTarget.x - this.mouseCurrent.x) * this.PARALLAX_LERP;
    this.mouseCurrent.y += (this.mouseTarget.y - this.mouseCurrent.y) * this.PARALLAX_LERP;

    this.cameraTargetOffset.x = (this.mouseCurrent.x - 0.5) * 2;
    this.cameraTargetOffset.y = (this.mouseCurrent.y - 0.5) * -2;

    this.cameraOffset.x += (this.cameraTargetOffset.x - this.cameraOffset.x) * this.CAMERA_EASE;
    this.cameraOffset.y += (this.cameraTargetOffset.y - this.cameraOffset.y) * this.CAMERA_EASE;

    this.camera.position.x = this.cameraOffset.x;
    this.camera.position.y = this.cameraOffset.y;
    this.camera.position.z = 5;
    this.camera.lookAt(this.cameraOffset.x, this.cameraOffset.y, 0);

    if (this.particles) {
      this.particles.rotation.y += 0.0003;
    }
    this.renderer.render(this.scene, this.camera);
  };
}
