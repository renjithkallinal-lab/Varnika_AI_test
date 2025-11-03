# Placeholder wrapper for Stable Video Diffusion (SVD) runtimes.
# Adapt this to call your SVD runtime (ComfyUI, Automatic1111 extension, or an inference server).
import subprocess

def generate_svd(prompt: str, out_path: str, duration: int = 3, **kwargs):
    cmd = [
        'python', 'run_svd.py',
        '--prompt', prompt,
        '--out', out_path,
        '--duration', str(duration)
    ]
    subprocess.check_call(cmd)
