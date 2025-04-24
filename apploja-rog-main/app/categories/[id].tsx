import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { data } from '../../data';
import { Product } from '../../types/product';

export default function CategoryProductsScreen() {
  const { id } = useLocalSearchParams();
  const categoryId = Number(id);

  const products = data.products.filter(
    (product) => product.idCategory === categoryId
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Link href={`/product/${item.id}`} asChild>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={styles.productPrice}>
                R$ {item.price.toFixed(2)}
              </Text>
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
  productCard: {
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
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
}); 