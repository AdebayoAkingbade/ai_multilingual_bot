import { Stack } from "expo-router";


function RouteGuard({children}: {children: React.ReactNode}){
  const isAuth = false;

  
  return <>{children}</>
}
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
}
