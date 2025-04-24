import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { data } from '../data';
import { Product } from '../types/product';

export default function HomeScreen() {
  const featuredProducts = data.products.slice(0, 3);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo ao Catálogo</Text>
        <Text style={styles.subtitle}>Descubra nossos produtos em destaque</Text>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Produtos em Destaque</Text>
        {featuredProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            asChild
          >
            <TouchableOpacity style={styles.productCard}>
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productDescription} numberOfLines={2}>
                  {product.description}
                </Text>
                <Text style={styles.productPrice}>
                  R$ {product.price.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              asChild
            >
              <TouchableOpacity style={styles.categoryCard}>
                <Image
                  source={{ uri: category.cover }}
                  style={styles.categoryImage}
                />
                <View style={styles.categoryInfo}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
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
  categoriesSection: {
    padding: 20,
  },
  categoryCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  categoryInfo: {
    padding: 12,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
