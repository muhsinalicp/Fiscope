"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useState, useEffect } from "react";

export function useInitUser() {
  const { isSignedIn } = useUser();

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (isSignedIn && !initialized) {
      const fetchData = async () => {
        await axios
          .post("/api/auth")
          .then(() => setInitialized(true))
          .catch(() => console.log("Failed to fetch user"));
      };
      fetchData();
    }
  }, [isSignedIn, initialized]);
}
