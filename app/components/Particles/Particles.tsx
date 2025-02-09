import { CanvasHTMLAttributes, FC, useEffect, useRef } from 'react';
import {
  CanvasParticles,
  CanvasParticlesProps,
} from '@/components/Particles/CanvasParticles';

type Props = CanvasHTMLAttributes<HTMLCanvasElement> &
  Partial<CanvasParticlesProps>;

export const Particles: FC<Props> = ({
  particlesCount = 100,
  particlesVelocity = [0.05, 0.1],
  particlesSize = 3,
  particlesRadius = [200, 1000],
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current === null) {
      return;
    }

    const canvasConfig: CanvasParticlesProps = {
      particlesCount,
      particlesVelocity,
      particlesSize,
      particlesRadius,
    };

    const canvasParticles = new CanvasParticles(
      canvasRef.current,
      canvasConfig,
    );

    return canvasParticles.onUnMount;
  }, []);

  return (
    <>
      <canvas style={{ filter: 'blur(3px)' }} {...props} ref={canvasRef} />
    </>
  );
};
