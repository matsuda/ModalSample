import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Hide the header for the tabs
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="modal-with-stack"
        options={{
          presentation: "modal",
          headerShown: false, // Hide the header for the modal
        }}
      />
    </Stack>
  );
}
