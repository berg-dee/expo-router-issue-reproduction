import { Stack } from 'expo-router';

export default function ExploreLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="test"  />
      <Stack.Screen name="test-2" options={{ presentation: 'modal' }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}