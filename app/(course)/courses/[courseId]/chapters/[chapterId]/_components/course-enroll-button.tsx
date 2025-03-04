"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

const CourseEnrollButton = ({ price, courseId }: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const isFull =
    courseId === "3a465407-1ec5-4d8b-9a97-cd528d105f0e" ||
    courseId === "c20f1e2a-2d11-4122-b193-577e0f6c7c4e";

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(response.data.url);
    } catch {
      toast.error("Algo salio mal");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isFull ? (
        <Button disabled className="w-full md:w-auto" size="sm">
          Convocatoria Cerrada
        </Button>
      ) : (
        <Button
          onClick={onClick}
          disabled={isLoading}
          className="w-full md:w-auto"
          size="sm"
        >
          Compra el curso por {formatPrice(price)}
        </Button>
      )}
    </>
  );
};

export default CourseEnrollButton;
