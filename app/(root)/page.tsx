import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Nartey", lastName: "Sarso", email: "narteysarso@gmail.com"};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 166.45},{currentBalance: 783.45}]}

       />
    </section>
  )
}

export default Home