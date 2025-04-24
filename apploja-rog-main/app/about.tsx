import { View, Text, StyleSheet, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://picsum.photos/id/64/200/200' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Bruno Sossella</Text>
        <Text style={styles.course}>Curso: Engenharia de Software</Text>
        <Text style={styles.semester}>Semestre: 5º</Text>
      </View>

      <View style={styles.bioSection}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text style={styles.bioText}>
        Sou um desenvolvedor apaixonado por transformar ideias em soluções inovadoras, 
        com foco em criar experiências de usuário intuitivas e impactantes. 
        Estou constantemente em busca de novos desafios que me permitam crescer profissionalmente e aprofundar meus conhecimentos em desenvolvimento de software, sempre 
        com o objetivo de entregar valor por meio da tecnologia.
        </Text>
      </View>

      <View style={styles.aspirationsSection}>
        <Text style={styles.sectionTitle}>Aspirações Profissionais</Text>
        <Text style={styles.aspirationsText}>
        Meu objetivo é me tornar um desenvolvedor full-stack, dominando tanto o front-end quanto o back-end, para entregar soluções completas e eficientes.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007AFF',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  course: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  semester: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  bioSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  bioText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  aspirationsSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 1,
  },
  aspirationsText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
}); 