import { StyleSheet, Text, View, ScrollView } from 'react-native'
import data from '../../../data/data.json'
import Card from '../../../components/Card'

const Explore = () => {
  return (
    <ScrollView>
      <View className='mx-5 h-max mt-5 mb-12'>
        {data.map((items, index) => (
          <Card 
            key={index}
            name={items.name}
            rating={items.rating}
            price={items.price}
            room={items.room}
            facilites={items.facilites}
            image={items.image}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default Explore

const styles = StyleSheet.create({})