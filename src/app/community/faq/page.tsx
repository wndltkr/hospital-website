'use client';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import SideMenu from '@/components/SideMenu';
import { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import TabNavigation from '@/components/TabNavigation';

const tabs = [
  { id: 'colon', name: '대장항문센터' },
  { id: 'endoscopy', name: '소화기내시경센터' },
  { id: 'health', name: '건강증진센터' },
  { id: 'fluid', name: '세로움수액센터' },
  { id: 'breast', name: '유방갑상선센터' },
  { id: 'internal', name: '내과질환센터' },
  { id: 'clinic', name: '클리닉센터' },
];

const colonFAQs = [
  {
    id: 1,
    question: '항문거근증후군과 치질은 어떻게 구분하나요?',
    answer: '치질과 달리 항문거근증후군은 출혈 증상 및 덩어리가 발생하지 않습니다. 또 치질은 배변할 때 통증이 심해지는 반면 항문거근증후군은 배변할 때 뿐만 아니라 일상생활 중에도 통증이 느껴집니다. 덧붙여 치질은 항문 입구가 아프지만 항문거근증후군은 그보다 더 깊숙한 곳에서 통증이 느껴집니다.',
    image: '/images/community/question_img1-1.jpg'
  },
  {
    id: 2,
    question: '치질을 그대로 두면 항문암이 되나요?',
    answer: '치질은 치핵, 치루, 치열 등 항문질환을 통칭하는 말입니다. 환자에 따라 항문암으로 발전할 위험 요인을 갖고 있다면 이어질 수 있지만 그 사례는 매우 생소한 편입니다. 그러나 정확한 검진을 위해 가능한 한 늦지 않게 정확한 진단을 받아보시는 것이 바람직합니다.',
    image: '/images/community/question_img1-2.jpg'
  },
  {
    id: 3,
    question: '좌욕만 해도 치질이 나아질 수 있나요?',
    answer: '좌욕은 항문 건강관리에 좋은 생활 습관 중 하나입니다. 약 40~45도 정도의 따뜻한 물을 넣은 대야에 3~5분 정도 쪼그려 앉은 상태에서 하면 되는데, 다만 그 시간이 너무 길어진다면 오히려 항문 압력이 높아지고 혈관이 지나치게 이완되면서 증상이 더 악화될 수 있습니다. 또 치질로 알려진 치핵은 근본적인 치료가 중요하므로 가능한 한 빠른 시일 내에 의료진을 찾아 상담부터 받아보시기 바랍니다.',
    image: '/images/community/question_img1-3.jpg'
  },
  {
    id: 4,
    question: '치질, 치루는 비데를 사용하면 안 될까요?',
    answer: '전반적인 항문질환들은 과하게 휴지를 사용하는 것보다 비데를 사용하는 것이 나을 수도 있습니다. 다만 비데 위생관리가 철저하게 이루어져야 하고 수압을 약하게 사용하는 것이 항문 건강관리에 도움이 될 수 있습니다.',
    image: '/images/community/question_img1-4.jpg'
  }
];

const endoscopyFAQs = [
  {
    id: 1,
    question: '당일에 위내시경·대장내시경 검사를 받을 수 있을까요?',
    answer: '간혹 시간적 여유가 없어 당일 위, 대장내시경 검사를 희망하시는 분들이 있습니다. 먼저 위내시경 검사의 경우 검사 전알 오후 9시부터 물을 제외한 모든 음식에 대한 금식을 해 주셔야 합니다. 대장내시경 검사는 가능한 한 먼저 진료를 진행하신 후 검사 날을 다시 잡고 검사 3일 전부터 식단 및 식사량을 조절하고 검사 하루 전에는 대장 내부를 깨끗하게 청소하는 약물을 복용한 후 방문하시는 게 좋습니다. 만약 대장내시경 검사 전 먼저 진료를 받는 것이 어렵다면 장 청소 후 검사가 진행되어야 하므로 아침 일찍 내원하시길 권합니다.',
    image: '/images/community/question_img2-1.jpg'
  },
  {
    id: 2,
    question: '위내시경 검사 전 소량의 물을 마셨는데 괜찮을까요?',
    answer: '보통 위내시경 검사 전에는 일정 시간 동안 물을 포함한 모든 음식을 제한해야 합니다. 금식을 해야 위 내부를 더 잘 관찰할 수 있기 때문인데요, 약 10ml 정도의 적은 양의 물도 위에 남아있는 내용물을 증가시킬 수 있으므로 가능한 한 물을 마시지 않도록 조심해야 합니다. 더 자세한 내용은 의료진과 상의하시는 게 좋습니다.',
    image: '/images/community/question_img2-2.jpg'
  },
  {
    id: 3,
    question: '위내시경·대장내시경 검사를 동시에 받을 수 있나요?',
    answer: '위내시경 검사와 대장내시경 검사는 한 번에 진행할 수 있습니다. 자세한 내용은 사전에 의료진과 자세한 상의가 필요합니다.',
    image: '/images/community/question_img2-3.jpg'
  },
  {
    id: 4,
    question: '치질(치핵)이 있는데, 대장내시경 검사를 받아도 될까요?',
    answer: '항문질환 중 하나인 치핵이 있을 때 그 정도와 증상이 심하지 않아 내시경 기구 삽입이 어렵지 않다면 대장내시경 검사가 가능합니다. 또 대장내시경 검사로 인해 치질(치핵)이 악화되지 않으므로 안심하셔도 됩니다.',
    image: '/images/community/question_img2-4.jpg'
  }
];

const healthFAQs = [
  {
    id: 1,
    question: '건강검진 전 왜 일정 시간 동안 공복을 유지해야 하나요?',
    answer: '건강검진 항목에 다라 달라질 수 있습니다. 혈당과 콜레스테롤 수치 등 대사질환을 확인하는 목적이라면 금식이 필요할 수 있고 위내시경 검사 역시 정확하고 안전한 검사를 위해 일정 시간 동안 금식이 필요합니다.',
    image: '/images/community/question_img3-1.jpg'
  },
  {
    id: 2,
    question: '건강검진은 아무 병원에서 받아도 상관 없나요?',
    answer: '건강검진은 거주지와 상관없이 본인이 검진을 받고자 하는 지역에서 건강검진이 가능한 곳으로 등록된 검진병원, 센터, 병의원 등에서 받을 수 있습니다. 다만 병원이나 검사 항목에 따라 사전 예약이 필요할 수도 있으므로 희망하시는 병원에 미리 문의하시어 신분증을 지참한 후 해당 일자에 방문하시면 됩니다.',
    image: '/images/community/question_img3-2.jpg'
  },
  {
    id: 3,
    question: '건강검진 전 복용을 피해야 할 약물이 있나요?',
    answer: '건강검진은 현재 건강 상태를 체크하는 것이기 때문에 가능한 한 평소와 동일한 상태에서 받는 것이 좋습니다. 특별히 검진 전 복용을 삼가야 하는 건강기능식품이나 영양제는 없습니다. 다만 과학적으로 검증되지 않은 건강기능식품은 간수치에 영향을 줄 수 있어 복용하지 않는 것이 좋고 고혈압, 당뇨병 등과 같은 질환에 대한 약물들은 검사에 영향을 줄 수 있어 사전에 의료진과 상의해야 합니다.',
    image: '/images/community/question_img3-3.jpg'
  },
  {
    id: 4,
    question: '건강검진에 소요되는 시간은 얼마나 되나요?',
    answer: '건강검진 소요 시간은 약 2시간 혹은 3시간 정도입니다. 그러나 추가 검사가 필요하거나 상황에 따라 시간이 더 소요될 수 있습니다.',
    image: '/images/community/question_img3-4.jpg'
  }
];

const fluidFAQs = [
  {
    id: 1,
    question: '고혈압, 신부전 등 만성질환자도 수액치료가 가능한가요?',
    answer: '정상인과 달리 심장질환 및 고혈압, 신부전 등 만성질환을 앓고 있다면 과도한 수액치료 시 심혈관계에 문제가 생길 수 있습니다. 또 간질환에 의해 간 기능이 떨어졌을 때에도 수액 치료가 신체 대사를 방해할 수 있으므로 사전에 의료진과 충분한 상담을 진행하셔야 합니다.',
    image: '/images/community/question_img4-1.jpg'
  },
  {
    id: 2,
    question: '특히 수액치료가 필요한 경우도 있나요?',
    answer: '평소 과음을 자주 하시거나 과로로 인해 만성피로에 시달리고 계시는 분들, 나이가 들어감에 따라 전과 달리 기력과 체력이 떨어진 노년층 분들, 면역력이 저하되어 감기에 자주 걸리시는 분들, 구내염이나 단순 포진이 자주 발생해 괴로운 분 등 전반적으로 삶의 질이 떨어진 분들에게 수액치료가 도움이 될 수 있습니다.',
    image: '/images/community/question_img4-2.jpg'
  },
  {
    id: 3,
    question: '수액치료가 근본적인 질환 및 통증의 원인도 해결해 주나요?',
    answer: '수액치료는 건강 상태를 회복하는 데 도움을 주고 일상생활의 활력을 더하는 보조적인 역할을 담당합니다. 따라서 질환이나 통증의 근본적인 원인을 해결하는 데에는 어려움이 있으며 개인 상태에 맞는 치료법과 약물 요법 등을 적용하면서 의료진과 상의하여 적절한 때에 수액치료를 진행한다면 건강을 회복하고 증진시키는 데 도움이 될 수 있습니다.',
    image: '/images/community/question_img4-3.jpg'
  }
];

const breastFAQs = [
  {
    id: 1,
    question: '갑자기 목이 아프고 이물감이 있는데, 갑상선 문제일까요?',
    answer: '목에서 느껴지는 이물감과 통증은 인후통을 동반한 감기로 생각하기 쉽습니다. 그러나 이 같은 증상이 지속된다면 갑상선염을 의심해 봐야 합니다. 갑상선염은 여러 가지 이유로 인해 갑상선에 염증이 생긴 것으로 급성 갑상선염, 아급성 갑상선염, 만성 갑상선염으로 구분됩니다. 보통 갑상선염은 갑상선 부위가 단단해지고 크기가 커지는 증상이 나타나며 갑상선기능저하증이 동반됩니다. 심각한 경우 갑상선기능항진증도 가져올 수 있어 빠른 시일 내에 검사를 받아봐야 합니다.',
    image: '/images/community/question_img5-1.jpg'
  },
  {
    id: 2,
    question: '갑상선 결절을 진단받았는데, 암인가요?',
    answer: '대부분 갑상선 결절 진단 시 암은 아닐런지 걱정이 앞서곤 합니다. 하지만 모든 갑상선 결절을 암으로 볼 수 없습니다. 별다른 문제를 일으키지 않는 양성 결절인 경우가 많은 편인데요, 다만 갑상선 결절 발견 시 세침검사, 총생검 등을 진행하고 그 결과 악성결절로 판단된다면 이는 갑상선암으로 볼 수 있습니다. 전체 갑상선 결절 중 약 95% 정도가 양성이며 5% 정도가 갑상선암으로 진단되는 거으로 알려져 있습니다.',
    image: '/images/community/question_img5-2.jpg'
  },
  {
    id: 3,
    question: '갑상선암은 정말 착한 암인가요?',
    answer: '암질환 중 하나인 갑상선암은 초기에 진단할 경우 전이 가능성이 적은 편이어서 생존율이 매우 높은 편입니다. 때문에 착한 암이라 불리게 되었는데요, 다만 적절한 치료시기를 놓칠 경우 다른 장기에 전이될 가능성이 높아지면서 생존율이 급격하게 떨어집니다. 따라서 갑상선암이 의심되는 증상이 있다면 적극적인 자세로 즉시 검진부터 받아보시는 게 좋습니다.',
    image: '/images/community/question_img5-3.jpg'
  },
  {
    id: 4,
    question: '갑상선 질환 환자들은 약을 평생 동안 복용해야 하나요?',
    answer: '갑상선 질환 중 약물을 복용하는 대표적 질환으로는 갑상선기능저하증과 갑상선기능항진증이 있습니다. 먼저 갑상선기능저하증의 경우 시간이 지날수록 갑상선 기능이 더 많이 떨어질 수 있으므로 거의 대부분 평생 동안 갑상선호르몬 치료를 진행해야 하는 것으로 알려졌습니다. 갑상선기능항진증의 경우 보통 항갑상선제가 처방되지만 부작용이 있을 경우 방사성 요오드 치료 및 수술적 치료가 고려될 수 있습니다.',
    image: '/images/community/question_img5-4.jpg'
  }
];

const internalFAQs = [
  {
    id: 1,
    question: '고혈압 약은 언제 먹어야 좋은가요?',
    answer: '일반적으로 인간의 혈압은 아침에 높아졌다가 수면을 취하는 밤에 내려갑니다. 때문에 고혈압 약은 아침, 점심, 저녁 중 아침에 복용하시는 것이 바람직합니다. 다만 혈압약의 종류에 따라 권장하는 복용법과 시간이 다르므로 본인이 복용하는 혈압약 종류를 확인하고 의료진의 조언 하에 복용하시는 것이 가장 올바른 복용법입니다.',
    image: '/images/community/question_img6-1.jpg'
  },
  {
    id: 2,
    question: '고지혈증은 무조건 약물치료를 해야 하나요?',
    answer: '혈중 콜레스테롤 수치가 높은 상태인 고지혈증은 방치 시 심뇌혈관 질환 등을 유발할 수 있어 적절한 치료 및 관리가 필요합니다. 보통 고지혈증은 규칙적인 운동과 식단 조절 등으로 콜레스테롤 수치 개선을 기대해 볼 수 있습니다. 그러나 이러한 노력에도 별다른 호전이 보이지 않거나 이미 고지혈증이 심각하다면 환자에 따라 적절한 약물치료가 필요할 수 있습니다.',
    image: '/images/community/question_img6-2.jpg'
  },
  {
    id: 3,
    question: '당뇨병으로 나타날 수 있는 합병증은 무엇이 있나요?',
    answer: '당뇨병은 여러 가지 합병증을 가져올 수 있습니다. 대표적으로 족부 괴사가와 실명을 초래할 수 있는 망막병증이 있으며 당뇨병성 신증, 뇌혈관질환, 관상동맥질환 등과 같은 질환 발병 위험을 높입니다. 보통 당뇨병으로 인한 합병증은 전신 어디에서나 나타날 수 있으며 한 번 찾아오면 회복이 힘들 뿐 아니라 자칫 잘못될 경우 사망에 이르게 만들 수 있어 각별한 주의가 요구됩니다.',
    image: '/images/community/question_img6-3.jpg'
  },
  {
    id: 4,
    question: '간질환자에게 건강즙이 독이라던데, 정말인가요?',
    answer: '건강관리를 위해 다양한 종류의 건강즙을 섭취하시는 분들이 많습니다. 그도 그럴 것이 영양성분이 농축되어 있기 때문에 몸에 좋은 성분들을 많이 함유하고 있기 때문인데요, 하지만 간질환자는 건강즙을 과다 복용하거나 특정 건강즙이 독이 될 수 있습니다. 실제로 국내 한 대학병원에서 진행한 연구 결과에 따르면 헛개나무즙이 간 이식이 필요한 급성간부전의 주요 원인으로 밝혀지기도 했습니다.',
    image: '/images/community/question_img6-4.jpg'
  },
  {
    id: 5,
    question: '폐질환은 완치가 어렵나요?',
    answer: '안타깝지만 한 번 손상된 폐는 원래대로 회복이 어려워 완치보다는 잘 관리하는 것이 더 중요합니다. 따라서 의료진의 처방대로 적극적인 자세로 치료에 임하는 것과 동시에 생활 습관을 올바르게 관리해야 합니다. 기본적으로 담배는 폐질환의 원흉이므로 반드시 금연하는 것이 좋고 매년 독감예방접종, 폐렴 예방접종 등을 잘 받는 게 좋습니다. 또 평소 규칙적으로 유산소 운동을 하는 게 좋고 식단 관리도 병행하면 좋습니다.',
    image: '/images/community/question_img6-5.jpg'
  },
  {
    id: 6,
    question: '신장질환자의 경우 혈액투석과 신장이식 중 더 나은 것이 있을까요?',
    answer: '심각한 만성신부전 질환자의 경우 혈액투석과 신장이식과 같은 신장 대체 요법이 필요할 수 있습니다. 보통 혈액투석은 신장질환에 따른 합병증이 없을 때 진행하는 것이 바람직하며 합병증 동반 시에는 적용이 어려울 수 있습니다. 뿐만 아니라 혈액투석을 위해 일주일 중 2~3번 정도 내원해야 한다는 한계가 있습니다.\n\n반면 신장이식은 반복적인 혈액투석이 필요하지 않다는 점이 큰 장점입니다. 그러나 경우에 따라 신장이식을 오래 기다려야 할 수도 있으며 수술을 받았다 하더라도 면역억제제 거부반응 등이 찾아올 수 있습니다. 다만, 면역억제제에 따른 거부 반응은 초기 발견 시 회복이 높은 편이기에 가급적 빠른 시간 안에 적극적으로 대처하는 게 중요합니다.',
    image: '/images/community/question_img6-6.jpg'
  }
];

const clinicFAQs = [
  {
    id: 1,
    question: '두통, 어지럼증, 메스꺼움도 목디스크 증상인가요?',
    answer: '디스크는 경추 사이에 있는 디스크가 여러 원인에 의해 돌출되어 신경을 압박하는 질환으로 눌리는 신경에 따라 두통 및 어지러움, 메스꺼움 등과 같은 증상도 동반할 수 있습니다. 또 목디스크는 어깨통증과 등통증, 뒷목의 뻐근함 등의 증상도 가져오는데요, 만약 이와 같은 증상들이 있다면 하루 빨리 내원하시어 정확한 진단을 받아보시길 권해드립니다.',
    image: '/images/community/question_img7-1.jpg'
  },
  {
    id: 2,
    question: '담석증으로 담낭을 제거해도 일상생활에 문제가 없나요?',
    answer: '담낭질환 중 하나인 담석증은 극심한 복통 및 담낭염, 간염, 황달 등이 동반되었을 때 의심없이 수술을 진행해야 합니다. 하지만 담낭을 제거하는 것이기 때문에 부담이 큰 편인데요, 이러한 걱정과 달리 담낭 제거술 뒤에는 특별히 조심해야 할 부분이 거의 없는 편이며 약 한 달정도는 기름진 음식 섭취를 자제하시길 권해드립니다.',
    image: '/images/community/question_img7-2.jpg'
  },
  {
    id: 3,
    question: '탈장 부위가 누르면 들어가는데 그냥 두면 안 되나요?',
    answer: '탈장은 초기에 묵직한 느낌과 통증이 느껴집니다. 또 탈장된 부위를 손으로 누르면 제자리로 돌아가는 경우가 많고 자연스럽게 회복되기도 합니다. 하지만 적절한 치료시기를 놓친다면 통증이 더 심해질 수 있고 돌출된 장이 제 자리로 돌아가지 않아 혈액순환 장애가 발생합니다. 심한 경우 장폐색, 장 괴사까지 이어질 수 있어 가능한 한 탈장이 의심된다면 즉시 내원하여 의료진의 진단을 받아보시는 게 좋습니다.',
    image: '/images/community/question_img7-3.jpg'
  },
  {
    id: 4,
    question: '충수염은 무조건 수술을 해야 하는 건가요?',
    answer: '충수염은 빠르게 대처하는 것이 중요합니다. 또 수술에 의해 발생한 합병증보다 수술을 미뤘을 때 나타나는 후유증이 더 심각하기 때문에 충수염 진단 시에는 적극적으로 수술적 처치를 진행하는 것이 바람직합니다. 충수염은 충수돌기를 절제하는 과정으로 수술이 진행되며 항생제를 투여하고 수술을 한 뒤에는 수일간 금식을 합니다.',
    image: '/images/community/question_img7-4.jpg'
  }
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('colon');
  const [openQuestion, setOpenQuestion] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <SideMenu />
      <Menu />
      
      
      {/* Banner Section */}
      <PageBanner
        title="자주하는 질문"
        description={[
          "세강병원은 항상 여러분의",
          "목소리에 귀를 기울입니다"
        ]}
        backgroundImage="/images/guide/guide-vis.jpg"
      />

      {/* Tab Navigation */}
      <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          className="mb-8"
        />

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {tabs.find(c => c.id === activeTab)?.name} 자주하는 질문
            </h2>
            
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {activeTab === 'colon' && colonFAQs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={faq.image}
                              alt={`${faq.question}에 대한 이미지`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {activeTab === 'endoscopy' && endoscopyFAQs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={faq.image}
                              alt={`${faq.question}에 대한 이미지`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {activeTab === 'health' && healthFAQs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={faq.image}
                              alt={`${faq.question}에 대한 이미지`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {activeTab === 'fluid' && fluidFAQs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={faq.image}
                              alt={`${faq.question}에 대한 이미지`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {activeTab === 'breast' && breastFAQs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={faq.image}
                              alt={`${faq.question}에 대한 이미지`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {activeTab === 'internal' && internalFAQs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={faq.image}
                              alt={`${faq.question}에 대한 이미지`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {activeTab === 'clinic' && clinicFAQs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openQuestion === faq.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openQuestion === faq.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                        <div className="md:w-1/2">
                          <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={faq.image}
                              alt={`${faq.question}에 대한 이미지`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
