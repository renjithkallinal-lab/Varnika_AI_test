from modelscope.pipelines import pipeline
from modelscope.utils.constant import Tasks
from moviepy.editor import VideoFileClip

pipe = pipeline(Tasks.text_to_video_synthesis, model='damo/text-to-video-synthesis')

def generate_text_to_video(prompt: str, output_path: str, duration: int = 3, style: str = 'cinematic'):
    result = pipe({'text': prompt})
    # Adapt to the actual result structure of the pipeline.
    video_path = result.get('output_video') or result.get('video_path')
    if not video_path:
        raise RuntimeError('Model did not return a video path. Check modelscope pipeline output.')
    clip = VideoFileClip(video_path)
    clip = clip.subclip(0, min(duration, clip.duration))
    clip.write_videofile(output_path, codec='libx264', audio=False)
