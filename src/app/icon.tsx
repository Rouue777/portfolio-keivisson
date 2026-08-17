import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070B14",
          color: "#F8FAFC",
          fontSize: 40,
          fontWeight: 800,
          borderRadius: 14,
          border: "3px solid #3B82F6",
        }}
      >
        K
      </div>
    ),
    size,
  );
}
