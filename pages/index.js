import AuthProvider from '@/components/AuthProvider/AuthProvider'
import HomePage from '@/components/Home/Home'
import Layout from '@/components/Layout/Layout'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='max-w-[1920px]'>
   
        <Layout>
          <HomePage></HomePage>
        </Layout>
    
    </div>
  )
}
