"use client";

import React from 'react';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Menu />
      <SideMenu />

      <div className="container mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            (의)일민의료재단 세강병원(이하 &apos;병원&apos;이라한다)은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>
          <p className="mb-4">
            병원의 개인정보처리방침은 관련 법률 및 지침의 변경 또는 내부 운영 방침의 변경에 따라 변경될 수 있습니다. 병원의 개인정보처리방침이 변경될 경우 변경된 사항을 홈페이지 (www.skhospital.co.kr) 또는 원내 비치를 통하여 공지합니다.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border">
              <thead>
                <tr>
                  <th className="border p-2">일반 개인정보 수집</th>
                  <th className="border p-2">개인정보 처리항목</th>
                  <th className="border p-2">개인정보 처리목적</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">아이디, 이름, 생년월일, 주소<br />핸드폰 번호, 이메일, 비밀번호<br />집 전화번호</td>
                  <td className="border p-2">성명, 주민등록번호, 생년월일<br />외국인등록번호(외국인에 한정)<br />핸드폰 번호, 카드번호, 차량번호</td>
                  <td className="border p-2">회원가입<br />진료 및 검진 예약<br />본인 확인 및 민원처리</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border">
              <thead>
                <tr>
                  <th className="border p-2">개인정보 보유기간</th>
                  <th className="border p-2">개인정보 제3자 제공</th>
                  <th className="border p-2">개인정보 처리위탁</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">의료법 및 관련법령에 따라 보관<br />회원 탈퇴시 즉시 파기<br />처리 목적 달성시 파기</td>
                  <td className="border p-2">정보주체의 동의<br />법률에 특별한 규정</td>
                  <td className="border p-2">시스템 유지보수 및 개발<br />검사의뢰<br />신용카드 결제 등</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border">
              <thead>
                <tr>
                  <th className="border p-2">고충처리부서</th>
                  <th className="border p-2">개인정보 열람청구</th>
                  <th className="border p-2">개인정보 보호 책임자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">원무과(진료정보): 053-620-6117<br />전산실(영상정보): 053-620-6188</td>
                  <td className="border p-2">원무과(진료정보): 053-620-6117<br />전산실(영상정보): 053-620-6188</td>
                  <td className="border p-2">개인정보 보호책임자 : 병원장<br />개인정보 실무책임자 : 전산실장 원무과장</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">※ 자세한 내용은 아래의 개인정보 처리방침을 확인하시기 바랍니다.</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">제1조 개인정보의 처리목적</h2>
              <p className="mb-4">
                병원은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>법률에 특별한 규정이 있거나 법령상 의무 준수를 위하여 불가피한 경우</li>
                <li>진료 예약 등 서비스 제공</li>
                <li>민원사무 처리</li>
                <li>홈페이지 회원가입 및 관리</li>
                <li>그 밖에 진료협력 서비스 개선을 위한 설문조사, 병원에서 행하는 각종 행사 소식 및 간행물 제공</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제2조 개인정보의 처리 및 보유기간</h2>
              <p className="mb-4">
                병원은 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보 수집 시에 동의 받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <p className="mb-4">
                각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>법률에 특별한 규정이 있거나 법령 상 의무 준수를 위하여 불가피한 경우</li>
                <li>진료 예약 등 서비스 제공</li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                <li>신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년</li>
                <li>본인 확인에 관한 기록 : 6개월</li>
                <li>방문에 관한 기록 : 3개월</li>
                <li>홈페이지 회원 정보는 탈퇴 시 바로 DB에서 삭제</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제3조 처리하는 개인항목</h2>
              <p className="mb-4">
                병원은 서비스 이용을 위해 필요한 최소한의 개인정보만을 수집합니다. 진료를 위한 필수 정보는 관련 법령에 따라 별도의 동의 없이 진료 신청서 작성을 통해 수집하며, 진료 이외의 추가 서비스 제공을 위해 필요한 개인정보 항목은 별도의 수집·이용 동의서를 통해 수집합니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>진료시 수집항목
                  <ul className="list-disc pl-6 mt-2">
                    <li>필수 항목 : 병원등록번호, 성명, 생년월일, 주민등록번호, 외국인등록번호(외국인에 한함), 주소, 핸드폰 번호, 건강(진료)정보</li>
                    <li>선택 항목 : 집 전화번호, 이메일, 보호자 핸드폰 번호</li>
                  </ul>
                </li>
                <li>진료비 수납시 수집항목
                  <ul className="list-disc pl-6 mt-2">
                    <li>필수 항목 : (신용카드 결제시)카드사명, 카드번호 등 카드 결제에 필요한 승인 정보</li>
                    <li>선택 항목 : (현금영수증 승인시)현금영수증 카드번호 및 본인 이외의 핸드폰 번호</li>
                  </ul>
                </li>
                <li>진료예약 및 검사예약시 수집항목
                  <ul className="list-disc pl-6 mt-2">
                    <li>필수 항목 : 성명, 주민등록번호, 핸드폰 번호, 주요증상</li>
                    <li>선택 항목 : 남기고 싶은 말</li>
                  </ul>
                </li>
                <li>입사시 수집항목
                  <ul className="list-disc pl-6 mt-2">
                    <li>필수 항목 : 성명, 주민등록번호, 핸드폰 번호, 이메일, 주소, 계좌정보, 학력사항, 성적, 가족사항</li>
                    <li>선택 항목 : 경력사항(해당자만), 자격사항(해당자만), 병역사항(해당자만), 종교</li>
                  </ul>
                </li>
                <li>주차 등록시 수집항목
                  <ul className="list-disc pl-6 mt-2">
                    <li>필수 항목 : 환자이름, 호실, 싸인, 차량번호</li>
                    <li>선택 항목 : 보호자 핸드폰 번호, 보호자 이름(보호자 차량인 경우 필수), 차량종류</li>
                  </ul>
                </li>
                <li>자원봉사자 등록 및 실적관리
                  <ul className="list-disc pl-6 mt-2">
                    <li>필수 항목 : 자원봉사자 이름, VMS 아이디</li>
                    <li>선택 항목 : 이메일, 핸드폰 번호</li>
                  </ul>
                </li>
                <li>대리인 처방시 수집항목
                  <ul className="list-disc pl-6 mt-2">
                    <li>환자 신분증(사본), 대리인 신분증(사본), 가족관계증명서(주민등록등본), 대리처방 신청서</li>
                  </ul>
                </li>
                <li>제증명 발급시 수집항목
                  <ul className="list-disc pl-6 mt-2">
                    <li>환자 본인 발급시 : 환자 신분증(사본), 제증명 발급 신청서</li>
                    <li>대리인 발급시 : 환자 신분증(사본), 대리인 신분증(사본), 가족관계증명서(주민등록등본), 제증명 발급 신청서</li>
                  </ul>
                </li>
                <li>홈페이지 회원 가입 및 게시판 작성시 수집항목
                  <ul className="list-disc pl-6 mt-2">
                    <li>필수 항목 : 아이디, 비밀번호, 이름, 핸드폰 번호, 이메일, 주소</li>
                    <li>선택 항목 : 집 전화번호</li>
                  </ul>
                </li>
                <li>인터넷 서비스 이용 과정이나 서비스 제공 업무 처리 과정에서 다음과 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
                  <ul className="list-disc pl-6 mt-2">
                    <li>서비스 이용기록, 방문 일시, 접속 로그, 쿠키, 접속 IP 정보 등</li>
                  </ul>
                </li>
                <li>그 외 특정 목적을 위해 단기적으로 개인정보를 수집할 경우에는 별도로 정보주체에게 공지하고 정보주체의 동의하에 수집합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제4조 개인정보의 제3자 제공</h2>
              <p className="mb-4">
                병원은 정보주체의 개인정보를 명시한 처리 목적의 범위 내에서만 처리하고 있으며, 정보주체의 동의, 타 법률의 특별한 규정 등 「개인정보 보호법」제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하고 그 이외에는 정보주체의 개인정보를 제3자에게 제공하지 않습니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>병원은 응급의료에 관한 법률 제11조에 따라 응급환자를 다른 의료기관으로 이송할 경우 이송받는 의료기관에 진료에 필요한 의무기록을 제공할 수 있습니다.</li>
                <li>병원은 의료법 제21조 제3항 각 호에 해당하는 경우 환자에 관한 기록을 열람하게 하거나 사본을 내어주는 등 내용을 확인할 수 있도록 하고 있습니다.</li>
                <li>병원은 생명윤리 및 안전에 관한 법률 제18조에 따라 인간대상연구를 수행하는 경우 정보주체의 서면동의와 동법에 따른 기관위원회의 심의를 거쳐 참여자의 개인정보를 제3자에게 제공할 수 있습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제5조 추가적인 이용·제공 판단기준</h2>
              <p className="mb-4">
                병원은 「개인정보 보호법」제15조 제3항 및 제17조 제4항에 따라 「개인정보 보호법」시행령 제14조의2에 따른 사항을 고려하여 정보주체의 동의 없이 개인정보를 추가적으로 이용·제공할 수 있습니다.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border">
                  <thead>
                    <tr>
                      <th className="border p-2">항목</th>
                      <th className="border p-2">제공목적</th>
                      <th className="border p-2">보유 및 이용기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">이름, 핸드폰 번호, 주소</td>
                      <td className="border p-2">조제약 및 처방전 오류 사실을 알리기 위한 연락</td>
                      <td className="border p-2">목적 달성후 즉시 파기</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4">
                이에 따라 병원은 정보주체의 동의 없이 추가적인 이용·제공을 하기 위해서 다음과 같은 사항을 고려하고 있습니다:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>개인정보를 추가적으로 이용·제공하려는 목적이 당초 수집 목적과 관련성이 있는지 여부</li>
                <li>개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 추가적인 이용·제공에 대한 예측 가능성이 있는지 여부</li>
                <li>개인정보의 추가적인 이용·제공이 정보주체의 이익을 부당하게 침해하는지 여부</li>
                <li>가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지 여부</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제6조 개인정보 처리의 위탁</h2>
              <p className="mb-4">
                병원은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border">
                  <thead>
                    <tr>
                      <th className="border p-2">수탁 업체명</th>
                      <th className="border p-2">위탁업무</th>
                      <th className="border p-2">보유 및 이용기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">㈜아이웍스</td>
                      <td className="border p-2">백업 서버 및 스토리지 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">유타스(주)</td>
                      <td className="border p-2">UNIX 서버 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜데이터뱅크시스템즈</td>
                      <td className="border p-2">DB 및 DB 접근제어 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜DBThink</td>
                      <td className="border p-2">DB암호화 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜인피니트헬스케어</td>
                      <td className="border p-2">PACS 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜태영소프트</td>
                      <td className="border p-2">PACS GateWay 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜이온엠솔루션</td>
                      <td className="border p-2">의료정보시스템 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜새롬소프트</td>
                      <td className="border p-2">건강검진시스템 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜뉴젠솔루션</td>
                      <td className="border p-2">인사급여 및 회계시스템 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">SEMA</td>
                      <td className="border p-2">콜센터 프로그램 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜코스콤</td>
                      <td className="border p-2">전자서명 공인인증 서비스</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜더베스트페이</td>
                      <td className="border p-2">진료비 신용카드 결제 및 환불정보 전송</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜푸디스트</td>
                      <td className="border p-2">환자 및 직원식이 관리</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜엔케이솔루션</td>
                      <td className="border p-2">카카오 알림톡 발송</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">JS정보통신</td>
                      <td className="border p-2">SMS문자 발송</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">㈜제이투케이컴퍼니</td>
                      <td className="border p-2">병원 홈페이지 유지보수</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">오케이쉬레드(주)</td>
                      <td className="border p-2">의무기록폐기</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">트라이앵글</td>
                      <td className="border p-2">주차, 청소 위탁</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">레몬헬스케어</td>
                      <td className="border p-2">외래 알림톡 진료예약 및 결제서비스</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">한국영상의원</td>
                      <td className="border p-2">영상외부판독</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">(재)서울의과학연구소</td>
                      <td className="border p-2">외부의뢰검사 위탁</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">GSD암검진연구소</td>
                      <td className="border p-2">외부의뢰검사 위탁</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">(재)씨젠의료재단</td>
                      <td className="border p-2">외부의뢰검사 위탁</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                    <tr>
                      <td className="border p-2">김동석병리과의원</td>
                      <td className="border p-2">외부의뢰검사 위탁</td>
                      <td className="border p-2">위탁계약 종료시까지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4">
                병원은 위탁계약 체결 시 「개인정보 보호법」제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 관리·감독하고 있습니다.
              </p>
              <p className="mb-4">
                위탁 업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제7조 정보주체와 법정대리인의 권리·의무 및 행사방법</h2>
              <p className="mb-4">
                정보주체는 병원에 대해 언제든지 다음 각 호의 권리를 행사할 수 있습니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>환자(본인)에 관한 기록 열람</li>
                <li>그 외 개인정보 열람·정정·삭제·처리정지 요구</li>
              </ol>
              <p className="mb-4">
                ※ 만 14세 미만 아동에 관한 개인정보의 열람등 요구는 법정대리인이 직접 해야 하며, 만 14세 이상의 미성년자인 정보주체는 정보주체의 개인정보에 관하여 미성년자 본인이 권리를 행사하거나 법정대리인을 통하여 권리를 행사할 수도 있습니다.
              </p>
              <p className="mb-4">
                제1항 각 호의 권리 행사는 다음의 방법으로 하실 수 있습니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>환자(본인)에 관한 기록 열람 : 본인임을 확인할 수 있는 신분증을 병원에 제시</li>
                <li>그 외 개인정보 열람, 정정, 삭제, 처리정지 요구 : &quot;개인정보 보호법&quot; 제35조(개인정보의 열람)에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 병원은 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</li>
              </ol>
              <p className="mb-4">
                제1항 각 호에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수도 있습니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>환자(본인)에 관한 기록 열람 :
                  <ul className="list-disc pl-6 mt-2">
                    <li>기록열람이나 사본발급을 요청하는 자의 신분증 사본</li>
                    <li>자가 자필 서명한 &quot;의료법 시행규칙&quot; 별지 제9호의2서식의 동의서 및 별지 제9호의3서식의 위임장이 경우 환자가 만 14세 미만의 미성년자인 경우에는 환자의 법정대리인이 작성하여야 하며, 가족관계증명서 등 법정대리인임을 확인할 수 있는 서류를 첨부하여야 한다.</li>
                    <li>환자의 신분증 사본 다만, 환자가 만 17세 미만으로 &quot;주민등록법&quot; 제24조제1항에 따른 주민등록증이 발급되지 아니한 자는 제외한다.</li>
                  </ul>
                </li>
                <li>그 외 개인정보 열람, 정정, 삭제, 처리정지 요구 : &quot;개인정보 처리 방법에 관한 고시(제2020-7호)&quot; 별지 제11호 서식에 따른 위임장을 제출</li>
              </ol>
              <p className="mb-4">
                제1항 각 호에 다른 권리 행사는 다음의 경우에는 제한될 수 있습니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>환자(본인)에 관한 기록 열람 : 국가안보에 긴요한 사안으로 &quot;다른 법률에 따라 진행 중인 감사 및 조사에 관한 업무&quot;를 수행하는데 지장을 초래할 때</li>
                <li>그 외 개인정보 열람, 정정, 삭제, 처리정지 요구 : &quot;개인정보 보호법&quot; 제35조 제4항 각 호, 제37조 제2항 각 호에 해당되는 경우</li>
              </ol>
              <p className="mb-4">
                병원은 제1항 각 호의 권리행사를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제8조 개인정보의 안전성 확보조치</h2>
              <p className="mb-4">
                병원은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>관리적 조치 : 내부관리계획의 수립·시행, 전담조직 운영, 정기적인 직원교육</li>
                <li>기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화, 보안 프로그램 설치 및 갱신</li>
                <li>물리적 조치 : 전산실, 자료 보관실 등의 비인가자에 대한 접근통제</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제9조 개인정보 보호책임자 및 개인정보 보호실무자</h2>
              <p className="mb-4">
                병원은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있으며 개인정보 보호 책임자를 보좌하고 개인정보 보호 업무에 대한 실무를 총괄하고 관리하는 개인정보 보호실무자를 두고 있습니다.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border">
                  <thead>
                    <tr>
                      <th className="border p-2">구분</th>
                      <th className="border p-2">직책 및 이름</th>
                      <th className="border p-2">연락처</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">개인정보 보호책임자</td>
                      <td className="border p-2">직책 : 병원장<br />성명 : 김징균</td>
                      <td className="border p-2">전화번호 : 053-215-6200<br />팩스번호 : 053-620-6114</td>
                    </tr>
                    <tr>
                      <td className="border p-2">개인정보 보호실무자</td>
                      <td className="border p-2">직책 : 전산실장<br />성명 : 오상윤</td>
                      <td className="border p-2">전화번호 : 053-620-6187<br />팩스번호 : 053-620-6297<br />이메일 : sayber20@nate.com</td>
                    </tr>
                    <tr>
                      <td className="border p-2">개인정보 보호실무자</td>
                      <td className="border p-2">직책 : 원무과장<br />성명 : 박혜련</td>
                      <td className="border p-2">전화번호 : 053-620-6117<br />팩스번호 : 053-620-6224<br />이메일 : heyrean@naver.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4">
                정보주체는 병원의 서비스를 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호실무자 및 담당부서로 문의할 수 있습니다. 병원은 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제10조 개인정보 열람청구</h2>
              <p className="mb-4">
                정보주체는 &quot;개인정보 보호법&quot;제35조(개인정보의 열람)에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 병원은 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">[진료정보 개인정보 열람청구 접수·처리부서]</h3>
                  <p>◇ 부서명 : 원무과</p>
                  <p>◇ 연락처 : 053-620-6117~6118,　FAX : 053-620-6224</p>
                </div>
                <div>
                  <h3 className="font-bold">[영상정보 열람청구 접수·처리부서]</h3>
                  <p>◇ 부서명 : 전산실</p>
                  <p>◇ 연락처 : 053-620-6188,　FAX : 053-620-6239</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제11조 개인정보의 파기</h2>
              <p className="mb-4">
                병원은 개인정보 보유기간의 경과, 처리목적 달성, 폐업 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              </p>
              <p className="mb-4">
                - 병원은 폐업 또는 휴업 신고를 할 때에는 기록·보존하고 있는 진료기록부, 간호기록, 그 밖의 진료에 관한 모든 기록을 관할 보건소장에게 이관합니다.
              </p>
              <p className="mb-4">
                정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성 되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)에 옮기거나 보관장소를 달리하여 보존합니다.
              </p>
              <p className="mb-4">
                개인정보 파기의 절차 및 방법은 다음과 같습니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>파기절차
                  <ul className="list-disc pl-6 mt-2">
                    <li>병원은 파기 사유가 발생한 개인정보를 선정하고 병원의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                  </ul>
                </li>
                <li>파기방법
                  <ul className="list-disc pl-6 mt-2">
                    <li>병원은 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법을 사용하여 파기하며 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기 합니다.</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제12조 권익침해 구제방법</h2>
              <p className="mb-4">
                정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</li>
                <li>개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</li>
                <li>대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>
                <li>경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</li>
              </ol>
              <p className="mb-4">
                병원은 정보주체의 개인정보자기결정권을 보장하고, 개인정보침해로 인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나 상담이 필요한 경우 아래의 담당부서로 연락해 주시기 바랍니다.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">◇ 개인정보보호 관련 고객 상담 및 신고</h3>
                  <p>부서명 : 원무과(박혜련)</p>
                  <p>연락처 : 053-620-6117, heyrean@naver.com, FAX：053-620-6224</p>
                </div>
                <div>
                  <p>부서명 : 전산실(오상윤)</p>
                  <p>연락처 : 053-620-6187, sayber20@nate.com, FAX：053-620-6297</p>
                </div>
              </div>
              <p className="mb-4">
                「개인정보 보호법」 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
              </p>
              <p className="mb-4">
                ◇ 중앙행정심판위원회 : (국번없이) 110 (www.simpan.go.kr)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제13조 동의철회 및 회원탈퇴 방법</h2>
              <p className="mb-4">
                정보주체는 개인정보의 수집ㆍ이용 및 제공에 대해 동의하신 내용을 언제든지 철회하실 수 있습니다. 개인정보보호 고충처리부서로 서면, 전화 또는 Fax등으로 연락하시면 지체없이 귀하의 개인정보를 파기하는 등 필요한 조치를 하겠습니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">제14조 개인정보처리방침 변경에 관한 사항</h2>
              <p className="mb-4">
                이 개인정보 처리방침은 2024년 7월 1일부터 적용됩니다.
              </p>
              <p className="mb-4">
                이 개인정보 처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 개인정보 처리방침을 시행하기 전에 변경이유 및 내용등을 공지하도록 하겠습니다. 이전의 개인정보 처리방침은 병원 홈페이지 (www.skhospital.co.kr)에서 확인하실 수 있습니다.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 