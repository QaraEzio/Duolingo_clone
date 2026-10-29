/** Shared design tokens for native styles and app logic. */
export const colors = {
  brand: "#6C4EF5",
  brandDeep: "#5B3BF6",
  brandBlue: "#4D8BFF",
  brandGreen: "#21C16B",

  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",

  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

export const typography = {
  family: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    semibold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
  },
  size: {
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 16,
    bodyLarge: 16,
    bodyMedium: 14,
    bodySmall: 13,
    caption: 11,
  },
  weight: {
    h1: "bold",
    h2: "semibold",
    h3: "semibold",
    h4: "medium",
    body: "regular",
  },
  lineHeightRatio: {
    h1: 1.2,
    h2: 1.3,
    h3: 1.3,
    h4: 1.4,
    body: 1.6,
    caption: 1.4,
  },
  /** Pixel line heights for React Native text styles. */
  lineHeight: {
    h1: 38.4,
    h2: 31.2,
    h3: 26,
    h4: 22.4,
    bodyLarge: 25.6,
    bodyMedium: 22.4,
    bodySmall: 20.8,
    caption: 15.4,
  },
} as const;
