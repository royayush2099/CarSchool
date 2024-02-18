import React from 'react'
import HeroSection from './components/HeroSection'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <HomeSec>
        <HeroSection />
        <div className="line"></div>
        <div className="heading">
          <h1>Our Goal is to Make You a
            Responsible and Safe Driver</h1>
        </div>
        <div className="content">
          <div className="paragraph">
            <p>
            Driving Now-s-days, can be nerve-wracking. One of the largest cities in the world also has the largest variety of driving styles. At our platform, we make certain that you are ready for the City driving experience. Our platform  has always strived to provide all students with the best tools and instructions to become safe and law abiding drivers. Students graduating from our school help make the City a better and a safer place for driving.
            </p>
          </div>
          <div className="paragraph">
            <p className='center-para'>
            Caring and polite nature of the private driving instructors, driving schools make them one of the best in the driving school business. Our platform have all components you will utilize at driving test time and also on a daily basis. The proprietary driving lesson training methods provided by our trusted driving school and instructors are one of the most successful in the driving school business. During the practical driving lessons, you will obtain easy to follow guidance from our private driving instructors and are able to apply them with ease and confidence.
            </p>
          </div>
          <div className="paragraph">
            <p>
            Our goal of our Platform is to make our Nation people's and students who joined us, pass the Driving Test along with instilling the importance of safe and defensive driving. Students who graduate from our platform are competent, defensive and confident drivers who will be ready to handle any type of roads in any condition and any part of the world.
            </p>
          </div>
        </div>
      </HomeSec>

    </>
  )
}

const HomeSec = styled.hgroup`
.line{
  border-top: 1px solid black;
  width: auto;
  margin-left: 2rem;
  margin-right: 2rem;
}

.heading{
  display: flex;
  align-items: center;
  justify-content: center;
  height:auto;
  width:auto;
  margin:2.5rem 0.6rem;


  h1{
    color: ${({ theme }) => theme.colors.black};
    font-size: 4rem;
    width: 60rem;
    font-weight: bold;
    text-align: center;

    
  }
}

.content{
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin:2rem 10rem;
  flex-gap:2rem;
  flex-wrap: nowrap;
  


  p{
    font-size:large;
    margin:1rem 1.4rem;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    width: 45rem;

  }

  .center-para{
    border-left: 3px solid ${({ theme }) => theme.colors.border};
    border-right: 3px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    padding: 2rem 1rem;
  }
}

`;

export default Home