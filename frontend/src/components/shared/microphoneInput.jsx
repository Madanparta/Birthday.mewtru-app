import React, { useEffect, useRef, useState } from 'react';

function MicrophoneInput({level, setLevel}) {
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);

  useEffect(() => {
    const handleSuccess = (stream) => {
      audioContextRef.current = new AudioContext();
      const microphone = audioContextRef.current.createMediaStreamSource(stream);

      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048;
      analyserRef.current.smoothingTimeConstant = 0.8;

      microphone.connect(analyserRef.current);

      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const draw = () => {
        requestAnimationFrame(draw);
        analyserRef.current.getByteFrequencyData(dataArray);

        const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
        const levelValue = Math.floor(average / 255 * 10);
        setLevel(levelValue);
      };

      draw();
    };

    const handleError = (error) => {
      console.error('Error accessing microphone:', error);
    };

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(handleSuccess)
      .catch(handleError);

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

//   return (
//     <div>
//       Sound level: {level}
//       {/* Add visualization here if needed */}
//     </div>
//   );
}

export default MicrophoneInput;
