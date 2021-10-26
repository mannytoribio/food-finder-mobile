import React, { useContext, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Fab, QuestionIcon } from 'native-base'
import styles from '../styles'
import RestaurantCard from './RestaurauntCard'
import { RestaurantContext } from '../App'

export default function Home({ navigation }) {
  const {restaurants, setRestaurants} = useContext(RestaurantContext)
  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(setRestaurants)
      .catch(alert)
  }, [])
  return (
    <View style={styles.container}>
      {!restaurants
        ? <Text>Loading...</Text>
        : <ScrollView>
          {restaurants.map(rest => <RestaurantCard key={rest.id} rest={rest} />)}
          </ScrollView>
      }
      <Fab colorScheme="green" onPress={() => navigation.navigate('Random')} icon={<QuestionIcon />} />
    </View>
  )
}
