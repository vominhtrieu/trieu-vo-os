import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const scripts = [
  {
    text: "Welcome to QuantumOS 3.0",
    delay: 200,
  },
  {
    text: "Initializing Quantum Core...",
    delay: 300,
  },
  {
    text: "[====================] 100% Complete",
    delay: 50,
  },
  {
    text: "Quantum Core Initialized Successfully!",
    delay: 200,
  },
  {
    text: "[..........] 20%",
    delay: 50,
  },

  {
    text: "[..........] 40%",
    delay: 50,
  },

  {
    text: "[..........] 60%",
    delay: 50,
  },
  {
    text: "[..........] 80%",
    delay: 50,
  },
  {
    text: "[..........] 100% Complete",
    delay: 50,
  },
  {
    text: "Advanced Modules Loaded!",
    delay: 200,
  },
  {
    text: "Checking System Integrity...\n",
    delay: 50,
  },
  {
    text: "System Integrity Check Passed Successfully!",
    delay: 200,
  },
  {
    text: "Optimizing Resource Allocation...",
    delay: 50,
  },
  {
    text: "[..........] 10%",
    delay: 50,
  },

  {
    text: "[..........] 30%",
    delay: 50,
  },

  {
    text: "[..........] 50%",
    delay: 50,
  },
  {
    text: "[..........] 70%",
    delay: 50,
  },
  {
    text: "[..........] 90%",
    delay: 50,
  },

  {
    text: "[..........] 100% Complete\n",
    delay: 50,
  },

  {
    text: "Resource Allocation Optimized!\n",
    delay: 200,
  },
  {
    text: "Initializing Secure Networking...\n",
    delay: 50,
  },
  {
    text: "[..........] 100% Complete\n",
    delay: 50,
  },
  {
    text: "Secure Networking Initialized Successfully!\n",
    delay: 200,
  },
  {
    text: "Launching Graphical User Interface...\n",
    delay: 50,
  },
  {
    text: "Graphical User Interface Ready!\n",
    delay: 200,
  },
  {
    text: "Login: trieuvo",
    delay: 50,
  },
  {
    text: "Password: *********\n",
    delay: 50,
  },
  {
    text: "Welcome to QuantumOS 3.0. Have a productive day!",
    delay: 500,
  },
];

export default function StartingUp() {
  const [scriptIndex, setScriptIndex] = useState(0);
  const [text, setText] = useState(scripts[0].text);
  const [delay, setDelay] = useState(scripts[0].delay);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (scriptIndex === scripts.length) {
      return;
    }
    const timeout = setTimeout(() => {
      if (!scripts[scriptIndex + 1]) {
        setVisible(false);
        return;
      }
      setScriptIndex(scriptIndex + 1);
      setText((text) => text + "\n" + scripts[scriptIndex + 1].text);
      setDelay(scripts[scriptIndex + 1].delay);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [scriptIndex, delay]);

  if (!visible) {
    return null;
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      background="black"
      fontFamily="'Roboto Mono', monospace"
      fontWeight={200}
      padding={24}
      zIndex={9999999}
    >
      <Text
        color="white"
        fontSize="2xl"
        fontWeight={400}
        textAlign="left"
        whiteSpace="pre-line"
      >
        {text}
      </Text>
    </Box>
  );
}
