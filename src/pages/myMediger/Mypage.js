import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircle } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import styled from 'styled-components';
import MedigerListWidget from '../../components/MedigerListWidget';
import DailyMedigerWidget from '../../components/DailyMedigerWidget';
import MypageLayout from '../../components/MypageLayout';

const MypageBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  /* background-color: aliceblue; */

  .HelloBox {
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5vh;
  }

  .HelloIcon {
    font-size: 10vw;
    margin-right: 3vw;
  }

  a {
    /* font-size: 10vw; */

    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: #3c7466;
    }
  }

  .Hello {
    font-size: 5.3vw;
    font-weight: bold;
    color: #3c7466;
  }

  .logoutBtn {
    font-size: 4vw;
    color: #3c7466;
    margin-left: 3vw;
  }

  .TitleBox {
    width: 85vw;
    // height: 3.5vw;
    padding: 0 7.5vw;
    margin-top: 5vh;
  }

  .Title {
    font-size: 3.5vw;
    color: #3c7466;
    margin-bottom: 0;
  }

  hr {
    width: 85vw;
    background: #3c7466;
    height: 1px;
    border: 0;
    margin-top: 0.5vh;
  }

  .ContentBox {
    width: 85vw;
    padding: 0 7.5vw;

    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: red;
  }

  .MedigerBox {
    width: 78vw;
    height: 16vh;
    margin-right: 2vw;

    display: flex;
    overflow: auto;
  }

  .MedigerBoxItem {
    display: flex;
  }

  .PlusBtn {
    font-size: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    color: #3c7466;
  }
`;

const StyledLink = styled(Link)`
  color: #3c7466;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #3c7466;
  }
`;

function Mypage() {
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [medigerLists, setMedigerLists] = useState([]);
  const today = new Date();

  const getAPI = async () => {
    const json = await (
      await fetch(`
          /home/mypage
          `)
    ).json();
    setId(json.id);
    localStorage.setItem('id', json.id);
    setUser(json.userName);
    setMedigerLists(json.scrapList);
    // console.log(json);
    console.log('mypage 실행');
  };

  useEffect(() => {
    getAPI();
  }, [user]);

  // console.log(user);
  // console.log(medigerLists);
  // const today = new Date();
  // console.log('mypage 실행 2');

  //   console.log(today);

  //   const [dayday, setDayday] = useState(new Date());

  //   setDayday = () => {
  //     new Date('2022-01-07');
  //   };

  //   useEffect(() => {
  //     setDayday();
  //   }, []);

  //   console.log(dayday);

  return (
    <div>
      <MypageLayout>
        <MypageBox>
          <div className="HelloBox">
            <div className="HelloIcon">💊</div>
            <div className="Hello">
              잠깐, {user}님!
              <br />
              오늘도 잊지 않으셨죠?
              <a href="http://localhost:8080/logout">
                <FiLogOut className="logoutBtn" />
              </a>
            </div>
          </div>

          <div className="DailyMedigerBox">
            <div className="TitleBox">
              <p className="Title">일간 메디저</p>
              <hr />
            </div>
            <StyledLink to={`/myMediger/MonthlyMediger`}>
              <div className="ContentBox">
                <DailyMedigerWidget day={today} />
              </div>
            </StyledLink>
          </div>

          <div className="MedigerListBox">
            <div className="TitleBox">
              <p className="Title">메디저 리스트</p>
              <hr />
            </div>
            <StyledLink to={`/MedigerList`}>
              <div className="ContentBox">
                <div className="MedigerBox">
                  <div className="MedigerBoxItem">
                    {medigerLists.map((item) => (
                      <MedigerListWidget
                        coverImg={item.itemImage}
                        name={item.itemName}
                      />
                    ))}
                  </div>
                </div>
                <div className="AddBtnBox">
                  <Link to={`/pillSearch`}>
                    <div className="PlusBtn">
                      <IoIosAddCircle />
                    </div>
                  </Link>
                </div>
              </div>
            </StyledLink>
          </div>
        </MypageBox>
      </MypageLayout>
    </div>
  );
}

export default Mypage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { IoIosAddCircle } from 'react-icons/io';
// import styled from 'styled-components';
// import MedigerListWidget from '../../components/MedigerListWidget';
// import DailyMedigerWidget from '../../components/DailyMedigerWidget';
// import { Desktop, Mobile, Tablet } from '../../components/ReactResponsive';
// import MypageLayout from '../../components/MypageLayout';
// import DesktopView from '../../components/DesktopView';
// import TabletView from '../../components/TabletView';

// const MypageBox = styled.div`
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   /* justify-content: center; */
//   /* align-items: center; */

//   /* background-color: aliceblue; */

//   .HelloBox {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 5vh;
//   }

//   .HelloIcon {
//     font-size: 10vw;
//     margin-right: 3vw;
//   }

//   .Hello {
//     font-size: 5.5vw;
//     font-weight: bold;
//     color: #3c7466;
//   }

//   .TitleBox {
//     width: 85vw;
//     // height: 3.5vw;
//     padding: 0 7.5vw;
//     margin-top: 5vh;
//   }

//   .Title {
//     font-size: 3.5vw;
//     color: #3c7466;
//     margin-bottom: 0;
//   }

//   hr {
//     width: 85vw;
//     background: #3c7466;
//     height: 1px;
//     border: 0;
//     margin-top: 0.5vh;
//   }

//   .ContentBox {
//     width: 85vw;
//     padding: 0 7.5vw;

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     // background-color: red;
//   }

//   .MedigerBox {
//     width: 78vw;
//     height: 16vh;
//     margin-right: 2vw;

//     display: flex;
//     overflow: auto;
//     // background-color: yellow;
//   }

//   .PlusBtn {
//     font-size: 25px;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     background-color: white;
//     color: #3c7466;
//   }
// `;

// const StyledLink = styled(Link)`
//   color: #3c7466;
//   text-decoration: none;

//   &:focus,
//   &:hover,
//   &:visited,
//   &:link,
//   &:active {
//     text-decoration: none;
//     color: #3c7466;
//   }
// `;

// function Mypage() {
//   return (
//     <div>
//       <Mobile>
//         <MypageLayout>
//           <MypageBox>
//             <div className="HelloBox">
//               <div className="HelloIcon">💊</div>
//               <div className="Hello">
//                 잠깐,
//                 <br />
//                 User1님! 잊지 않으셨죠?
//               </div>
//             </div>

//             <div className="DailyMedigerBox">
//               <div className="TitleBox">
//                 <p className="Title">일간 메디저</p>
//                 <hr />
//               </div>
//               <StyledLink to={`/myMediger/MonthlyMediger`}>
//                 <div className="ContentBox">
//                   <DailyMedigerWidget />
//                 </div>
//               </StyledLink>
//             </div>

//             <div className="MedigerListBox">
//               <div className="TitleBox">
//                 <p className="Title">메디저 리스트</p>
//                 <hr />
//               </div>
//               <StyledLink to={`/MedigerList`}>
//                 <div className="ContentBox">
//                   <div className="MedigerBox">
//                     <MedigerListWidget />
//                     <MedigerListWidget />
//                     <MedigerListWidget />
//                     <MedigerListWidget />
//                     <MedigerListWidget />
//                     <MedigerListWidget />
//                     <MedigerListWidget />
//                     <MedigerListWidget />
//                   </div>
//                   <div className="AddBtnBox">
//                     <Link to={`/pillSearch`}>
//                       <div className="PlusBtn">
//                         <IoIosAddCircle />
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </StyledLink>
//             </div>
//           </MypageBox>
//         </MypageLayout>
//       </Mobile>
//       <Desktop>
//         <DesktopView />
//       </Desktop>
//       <Tablet>
//         <TabletView />
//       </Tablet>
//     </div>
//   );
// }

// export default Mypage;
