// src/services/api.js
import { supabase } from '../lib/supabase'

export async function obtenerEventos() {
  const { data, error } = await supabase
    .from('eventos').select('*').order('id')
  if (error) throw error
  return data
}

export async function crearEvento(evento) {
  const { data, error } = await supabase
    .from('eventos').insert(evento).select().single()
  if (error) throw error
  return data
}

// El id va en el filtro, no en los datos
export async function actualizarEvento({ id, ...cambios }) {
  const { data, error } = await supabase
    .from('eventos').update(cambios).eq('id', id).select().single()
  if (error) throw error
  return data
}

// src/services/api.js
export async function iniciarSesion(email, password) {
  const { data, error } = await supabase.auth
    .signInWithPassword({ email: email.trim(), password })
  // Mismo mensaje si no existe o si la clave está mal
  if (error) throw new Error('Credenciales inválidas')
  return obtenerPerfil(data.user)
}

export async function obtenerPerfil(user) {
  const { data, error } = await supabase
    .from('profiles').select('nombre, rol')
    .eq('id', user.id).single()
  if (error) throw error
  return { id: user.id, email: user.email, ...data }
}

/*
  Avisa cada vez que cambia la sesión (y una vez al empezar, con la sesión guardada).
  Devuelve la función para dejar de escuchar. El setTimeout no es capricho: Supabase
  advierte que llamar a otra función del SDK DENTRO de este callback puede bloquearlo,
  y quien escucha (AuthProvider) va a consultar profiles.
*/
export function escucharSesion(callback) {
  const { data } = supabase.auth.onAuthStateChange((_evento, session) => {
    setTimeout(() => callback(session), 0)
  })
  return () => data.subscription.unsubscribe()
}

export async function cerrarSesion() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}