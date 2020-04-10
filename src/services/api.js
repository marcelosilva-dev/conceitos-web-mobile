import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api;

/**
 * Ips para acessar a api conforme dispositivo
 * 
 * IOS com emulador: localhost
 * IOS com fisico: IP da maquina
 * Android com emulador: localhost (adb reverse)
 * Android com emulador (Android Studio): 10.0.2.2
 * Android com emulador (Genymotion): 10.0.3.2
 * Android com fisico: IP da maquina
 */