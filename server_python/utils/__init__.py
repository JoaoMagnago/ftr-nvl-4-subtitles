import os
import numpy as np
from scipy.io import wavfile

def save_audio(audio, sample_rate, file_id):
    os.makedirs("audio", exist_ok=True)

    path = f"audio/{file_id}.wav"

    # Convert torch tensor to numpy
    if hasattr(audio, "numpy"):
        audio = audio.numpy()

    # Ensure float32
    audio = audio.astype(np.float32)

    # Bark sometimes outputs [2, N] — stereo with wrong axis order
    # Convert to [N, 2] for scipy
    if audio.ndim == 2 and audio.shape[0] in (1, 2):
        audio = audio.T

    # Clip to valid range
    audio = np.clip(audio, -1.0, 1.0)

    # Convert to int16
    audio_int16 = (audio * 32767).astype(np.int16)

    wavfile.write(path, sample_rate, audio_int16)

    return path
