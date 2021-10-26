import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from '../styles'
import RestaurantCard from './RestaurauntCard'

export default function Home() {
  const [restaurants, setRestaurants] = useState()
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
    </View>
  )
}
