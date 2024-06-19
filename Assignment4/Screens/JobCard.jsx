import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ job, featured }) => {
  const cardStyle = featured ? styles.featuredCard : styles.regularCard;
  const textStyle = featured ? styles.featuredText : styles.regularText;

  return (
    <View style={[styles.card, cardStyle]}>
      <View style={styles.logoContainer}>
        <Image source={job.logo} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, textStyle]}>{job.title}</Text>
        <Text style={[styles.company, textStyle]}>{job.company}</Text>
        <View style={styles.footer}>
          <Text style={[styles.salary, textStyle]}>{job.salary}</Text>
          <Text style={[styles.location, textStyle]}>{job.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    width: 327,
    height: 165,
  },
  featuredCard: {
    backgroundColor: '#3B82F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  regularCard: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderWidth: 1,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  logoContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuredText: {
    color: '#FFFFFF',
  },
  regularText: {
    color: '#1F2937',
  },
  company: {
    fontSize: 14,
    marginBottom: 8,
  },
  salary: {
    fontSize: 14,
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default JobCard;
