import React from 'react';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';

export default function CCTVPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      <Menu />
      <SideMenu />

      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">영상정보처리기기 운영·관리방침</h1>
        
        <div className="prose max-w-none">
          <p className="mb-8">
            (의)일민의료재단 세강병원(이하 '병원'이라 한다)은 고정형 영상정보처리기기 운영·관리 방침을 통해 병원에서 처리하는 개인영상정보가 어떠한 용도와 방식으로 이용·관리되고 있는지 알려드립니다.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">1. 고정형 영상정보처리기기의 설치 근거 및 설치 목적</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1-1. 「개인정보 보호법」 제25조 제1항에 따른 설치·운영</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>시설안전 및 화재 예방</li>
                  <li>고객의 안전을 위한 각종 범죄 예방</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">1-2. 「주차장법 시행규칙」 제6조 제1항에 따른 설치·운영</h3>
                <ul className="list-disc pl-6">
                  <li>차량도난 및 파손방지</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">1-3. 「의료법」 개정에 따른 설치·운영</h3>
                <ul className="list-disc pl-6">
                  <li>전산마취 등 환자 의식이 없는 상태에서 이루어지는 수술에 한하여 환자 및 보호자 동의하에 수술진행 상황을 영상으로 촬영합니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">2. 설치 대수, 설치 위치 및 촬영범위</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">설치대수</th>
                    <th className="border border-gray-300 px-4 py-2">설치 위치 및 촬영범위</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">30대</td>
                    <td className="border border-gray-300 px-4 py-2">병원 내부</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">6대</td>
                    <td className="border border-gray-300 px-4 py-2">정문 및 후문 주차장</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">2대</td>
                    <td className="border border-gray-300 px-4 py-2">엘리베이터 내부</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">6대</td>
                    <td className="border border-gray-300 px-4 py-2">수술실 수술진행 상황</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3. 관리책임자 및 접근권한자</h2>
            <p className="mb-4">
              정보주체의 개인영상정보를 보호하고 개인영상정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인영상정보 관리책임자 및 접근권한자를 두고 있습니다.
            </p>
            <p className="mb-4">
              - 수술실과 관련된 개인영상정보에 대해서는 따로 수술실 수간호사를 영상정보에 대한 접근권한자로 별도로 지정하고 있습니다.
            </p>
            <p className="mb-4">
              - 수술실 개인영상정보는 정보주체에게 제공시에만 전산실에서 관리를 하고 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">구분</th>
                    <th className="border border-gray-300 px-4 py-2">이름</th>
                    <th className="border border-gray-300 px-4 py-2">직위</th>
                    <th className="border border-gray-300 px-4 py-2">소속</th>
                    <th className="border border-gray-300 px-4 py-2">연락처</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">관리 책임자</td>
                    <td className="border border-gray-300 px-4 py-2">김명희</td>
                    <td className="border border-gray-300 px-4 py-2">국장</td>
                    <td className="border border-gray-300 px-4 py-2">미래전략기획실</td>
                    <td className="border border-gray-300 px-4 py-2">053-620-6323</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">접근 권한자</td>
                    <td className="border border-gray-300 px-4 py-2">오상윤</td>
                    <td className="border border-gray-300 px-4 py-2">과장</td>
                    <td className="border border-gray-300 px-4 py-2">경영지원팀</td>
                    <td className="border border-gray-300 px-4 py-2">053-620-6187</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">접근 권한자</td>
                    <td className="border border-gray-300 px-4 py-2">마시은</td>
                    <td className="border border-gray-300 px-4 py-2">수간호사</td>
                    <td className="border border-gray-300 px-4 py-2">수술실</td>
                    <td className="border border-gray-300 px-4 py-2">053-620-6112</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">4. 영상정보의 촬영시간, 보관기간, 보관장소, 처리방법</h2>
            <p className="mb-4">
              처리방법 : 개인영상정보의 목적 외 이용, 제3자 제공, 파기, 열람 등 요구에 관한 사항을 기록·관리하고, 보관기간 만료시 디지털 방식에 의하여 영구 자동 삭제되며, 출력물의 경우에는 파쇄 또는 소각합니다.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">촬영 범위</th>
                    <th className="border border-gray-300 px-4 py-2">촬영시간</th>
                    <th className="border border-gray-300 px-4 py-2">보관기간</th>
                    <th className="border border-gray-300 px-4 py-2">보관장소</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">수술실 제외 영상</td>
                    <td className="border border-gray-300 px-4 py-2">24시간</td>
                    <td className="border border-gray-300 px-4 py-2">촬영일로부터 34일</td>
                    <td className="border border-gray-300 px-4 py-2">CCTV 관리실</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">수술실 영상</td>
                    <td className="border border-gray-300 px-4 py-2">수술시간 동안</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">5. 고정형 영상정보처리기기 설치 및 관리 등의 위탁에 관한 사항</h2>
            <p className="mb-4">
              병원은 아래와 같이 고정형 영상정보처리기기의 설치 및 관리 등을 위탁하고 있으며, 관계 법령에 따라 위탁 계약시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 준수하고 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">위탁업체</th>
                    <th className="border border-gray-300 px-4 py-2">담당자</th>
                    <th className="border border-gray-300 px-4 py-2">연락처</th>
                    <th className="border border-gray-300 px-4 py-2">위탁 업무</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">엠스톤</td>
                    <td className="border border-gray-300 px-4 py-2">민현빈</td>
                    <td className="border border-gray-300 px-4 py-2">053-944-2196</td>
                    <td className="border border-gray-300 px-4 py-2">설치 및 고장시 수리</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">6. 개인영상정보의 확인 방법 및 장소에 관한 사항</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>확인방법 : 개인영상정보 관리책임자에게 연락하고 방문하시면 확인 가능합니다.</li>
              <li>확인장소 : CCTV관리실</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">7. 정보주체의 개인영상정보 열람 등 요구에 대한 조치</h2>
            <p className="mb-4">
              정보주체는 개인영상정보에 관하여 열람 또는 존재확인·삭제를 원하는 경우 언제든지 고정형 영상정보처리기기 운영자에게 요구하실 수 있습니다. 단, 귀하가 촬영된 개인영상정보에 한정됩니다. 병원은 개인영상정보에 관하여 열람 또는 존재확인·삭제를 요구한 경우 지체 없이 필요한 조치를 하겠습니다.
            </p>
            <p className="mb-4">
              또한 정보주체의 열람 등 청구에도 불구하고 아래와 같은 경우에는 고정형 개인영상정보 열람 등 청구를 거부할 수 있습니다.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>개인영상정보의 보관기간이 경과하여 파기된 경우</li>
              <li>법률에 따라 열람이 금지되거나 제한되는 경우(개인정보보호법 등)</li>
              <li>기타 정보주체의 열람 등 요구를 거부할 만한 정당한 사유가 존재하는 경우</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">8. 개인영상정보의 안전성 확보조치</h2>
            <p className="mb-4">
              병원에서 처리하는 영상정보는 안전하게 관리되고 있습니다. 또한 병원은 개인영상정보 보호를 위한 관리적 대책으로서 개인정보에 대한 접근 권한을 관리책임자 및 접근권한자에게만 부여하고 있으며, 개인영상정보의 위·변조 방지를 위하여 개인영상정보의 생성 일시, 열람시 열람 목적·열람자·열람 일시 등을 기록하여 관리하고 있습니다. 이외에도 개인영상정보의 안전한 물리적 보관을 위하여 잠금 장치를 설치하고 있습니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">9. 고정형 영상정보처리기기 운영·관리방침 변경에 관한 사항</h2>
            <p className="mb-4">
              이 영상정보처리기기 운영·관리방침은 2024년 11월 25일에 변경되었으며 관련 법령·정책 또는 보안기술의 변경에 따라 내용이 추가·삭제·수정이 있을 시에는 지체없이 병원 홈페이지(www.skhospital.co.kr)를 통해 변경사유 및 내용을 공지하도록 하겠습니다.
            </p>
            <p className="mb-4">
              이 고정형 개인영상정보처리기기 운영·관리방침은 공고일 즉시 적용됩니다.
            </p>
            <p className="mb-4">
              이 영상정보처리기기 운영·관리방침은 시행일로부터 적용됩니다.
            </p>
            <div className="mt-4">
              <p>공고일자 : 2024년 11월 25일</p>
              <p>시행일자 : 2024년 11월 25일</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
} 