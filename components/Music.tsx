import { PauseCircleFilled, PlayCircleFilled } from "@ant-design/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playing]);

  return (
    <Box
      width="370px"
      height="60px"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      background="rgba(0, 0, 0, 0.9)"
      border="1px solid rgba(255, 255, 255, 0.3)"
      padding="0 10px"
      borderRadius="15px"
      position="fixed"
      bottom={10}
      left={25}
      pointerEvents="all"
    >
      <Image
        borderRadius={10}
        border="2px solid white"
        src="/music/Transcendental-Meditation-Cover.jpg"
        width={45}
        height={45}
        marginRight={10}
      />
      <Box color="white">
        <Text fontWeight={600} fontSize={16}>
          Transcendental Meditation
        </Text>
        <Text fontSize={14} fontWeight="light" opacity={0.9}>
          HigherUniversalMan (Pixabay)
        </Text>
      </Box>
      <Button
        background="none"
        border="none"
        cursor="pointer"
        _active={{
          opacity: 0.9,
        }}
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.play();
          }
        }}
        marginLeft="auto"
      >
        {!playing ? (
          <PlayCircleFilled
            rev={undefined}
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: 30,
            }}
            onClick={() => {
              setPlaying(true);
            }}
          />
        ) : (
          <PauseCircleFilled
            rev={undefined}
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: 30,
            }}
            onClick={() => {
              if (audioRef.current) {
                setPlaying(false);
              }
            }}
          />
        )}
      </Button>
      <audio preload="auto" ref={audioRef}>
        <source src="/music/Transcendental-Meditation.mp3" type="audio/mpeg" />
      </audio>
    </Box>
  );
}
