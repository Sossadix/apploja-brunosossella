import { Stack } from 'expo-router';

export default function CategoriesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Categorias',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: 'Produtos da Categoria',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
} 