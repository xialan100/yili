const ADMIN_API_URL = 'https://app-oawpbtlg.fly.dev'

const ADMIN_CREDENTIALS = {
  username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin',
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'secret'
}

export interface ClientCase {
  id: number
  client_name: string
  project_title: string
  industry: string
  project_type: string
  description: string
  start_date: string
  end_date: string
  status: string
  achievements: string[]
  technologies_used: string[]
  client_logo_url: string
  project_image_url: string
  contact_person: string
  contact_email: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

class AdminApiClient {
  private token: string | null = null

  async authenticate(): Promise<string> {
    if (this.token) {
      return this.token
    }

    try {
      const response = await fetch(`${ADMIN_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ADMIN_CREDENTIALS)
      })

      if (!response.ok) {
        throw new Error('Authentication failed')
      }

      const data = await response.json()
      this.token = data.access_token
      return this.token!
    } catch (error) {
      console.error('Failed to authenticate with admin API:', error)
      throw error
    }
  }

  async getClientCases(): Promise<ClientCase[]> {
    try {
      const token = await this.authenticate()
      
      const response = await fetch(`${ADMIN_API_URL}/client-cases`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch client cases')
      }

      const cases = await response.json()
      return cases
    } catch (error) {
      console.error('Failed to fetch client cases:', error)
      return []
    }
  }
}

export const adminApi = new AdminApiClient()
