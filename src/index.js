import React , {useState , useEffect} from 'react'
import {TouchableOpacity , View, SafeAreaView ,FlatList,  ScrollView , Text , StyleSheet, StatusBar} from 'react-native'

import api from './services/api'

export default function App(){
  const [projects , setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects',{
      title: `Novo Projeto ${Date.now()}`,
      owner: "Marcelo Oliveira"
    });

    const project = response.data

    setProjects([...projects , project])
  }

  return (
  <>
  <StatusBar barStyle="light-content" backgroundColor='#7159c1' />
  <SafeAreaView style={styles.container}> 
  <FlatList
  data={projects}
  keyExtractor={project => project.id} 
  renderItem={({ item: project}) => (
    <Text  style={styles.text}>{project.title}</Text>
  )}
  />

  <TouchableOpacity 
  activeOpacity={0.6} 
  style={styles.button}
   onPress={handleAddProject}>
    <Text style={styles.buttonText}>Adicionar Projeto</Text>
  </TouchableOpacity>
  </SafeAreaView>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
   // justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#7159c1',
    flex: 1,
  },
  text: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
})