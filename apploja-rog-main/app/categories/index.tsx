import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { data } from '../../data';
import { Category } from '../../types/category';

export default function CategoriesScreen() {
  return (
    <FlatList
      data={data.categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Link href={`/categories/${item.id}`} asChild>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={{ uri: item.cover }}
              style={styles.categoryImage}
            />
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  categoryInfo: {
    padding: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
}); 