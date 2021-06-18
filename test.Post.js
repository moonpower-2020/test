import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import Alert from 'react-bootstrap/Alert'

const envPublicUrl = process.env.PUBLIC_URL



const info1 = `<Alert variant="light">
		  <Alert.Heading>(1999 년)</Alert.Heading>
		  <p>
			<h3> DP-900MII</h3>
		  </p>
		</Alert>
		`
const infoWithFigure ={ image: 'dp900mii.jpeg', 
			  caption: `"자기 펄스 검출에 의한 다이렉트 드라이브 플레이어"
                        "소리에 온기를 느끼게 란바코아 소재를 채용 한 블록 구조 대형 나무 캐비닛."
                        아날로그 플레이어 시스템
                        DP-900MII
                        표준 가격 : 105,000 엔 (세금 별도)`
			}
			
const image = 'dp900mii02.jpeg';
const info2 = `
			<p>바늘을 내리는 그 순간 환호가 들린다. </p>
			<p>오디오의 로망을 창조하는 고음질 매뉴얼 플레이어</p>
			<p><font size="-1"><b>■ 자기 펄스 검출에 의한 다이렉트 드라이브 플레이어 </b></font></p>
			<p><font size="-1">턴테이블의 외주에 1000 개의 자기 펄스를 기록하고 그것을 자기 헤드에서 감지 DENON 독자적인 자기 기록 검출 방법 식과 쿼츠 락의 조합에 의한 양방향 서보를 채용함으로써 안정된 회전 성능을 실현 하고 있습니다. 또한 전자 브레이크를 탑재하여 신속한 작업을 가능하게하고 있습니다.</font></p>


			<p><font size="-1"><b>■ 소리에 온기를 느끼게 란바코아 재 </b></font></p>
			<p><font size="-1">란바코아 (천연 나무)와 코팅 캐비닛에 의한 본격 플레이어입니다. 소재에 자연스러운 질감과 소리를 모색, 엄선 된 천연 나무 (자작 나무)를 채용. 또한 캐비닛 마감은 라운드 형태로 우아하게 마무리 부산 먼지 커버 컷과 색상 톤도 맛이있는 것으로 완성하고 있습니다.</font></p>

			<p><font size="-1"><b>■ 하울링 분석 된 블록 구조 대형 나무 캐비닛 </b></font></p>
			<p><font size="-1">캐비닛 내부는 적층형 하울링 특성의 장점과 상형 제작의 용이성을 고려하여 새로운 설계되어 있으며, 음압의 영향을 최대한 억제합니다. 또한 덤핑 짠 소리와 울림을 양립시키기 위해 바닥에 음압 조정 홀을 마련해 하 우린구 특성을 더욱 향상시킵니다. 또한 먼지 커버도 3 개의 힌지에 의해 견고하게 캐비닛에 장착하고 있습니다.</font></p>

			<p><font size="-1"><b>■ 강성과 하울링 특성을 높이기 대형 턴테이블. </b></font></p>
			<p><font size="-1">강화 리브 16 개를 배치 한 직경 331mm의 알루미늄 다이 캐스트 턴테이블을 채용. 자기 펄스 검출 헤드는 무게 장미 보수를 시뮬레이션하고 최고의 위치에 배치하고 있습니다. 점성 턴테이블 시트 포함.</font></p>

			<p><font size="-1"><b>■ 뱀 듀티 톤 암 채용 </b></font></p>
			<p><font size="-1">대형 알루미늄 다이 캐스트 암베이스는 3 점의 포인트와 부틸 계 고무 패킹에 의해 캐비닛 사이의 리레시 프로그램을 항상 최상의 상태로 유지 플로팅 구조 암 마운트 시스템을 채용하고 있습니다. 트랜스있는 중량급 카트리지 (껍질 포함 17 ~ 32.5g)도 서브 웨이트없이 대응할 수있는 고 강성 톤 암입니다.</font></p>

			<p><font size="-1"><b>■ 고 강성 알루미늄 헤드 쉘 포함 </b></font></p>
			<p><font size="-1">헤드 쉘 프로그램 상단에 강성 리브를 설치 한 신형 강화 헤드 쉘을 제공합니다.</font></p>
	  `	

const info3 = `
		<p>DP-900MII의 주요 사양</p>
			<ul>
				<li>구동 방식 : DENON 쿼츠 다이렉트 드라이브</li>
				<li>턴테이블 : 알루미늄 다이 캐스트 331mm (강화 리브 세트)</li>
				<li>와우 · 플러터 : 0.02 % W · rms</li>
				<li>SN 비 : 78dB</li>
				<li>암 형식 : 스태틱 밸런스 S 자형</li>
				<li>유효 길이 : 246mm</li>
				<li>오버행 : 15mm</li>
				<li>침압 조정 범위 : 0 ~ 3.0g</li>
				<li>소비 전력 (AC100V 50 / 60Hz) : 4W</li>
				<li>외형 치수 : W504 × H186 × D407mm</li>
				<li>질량 : 13kg</li>
				<p></p>
				<p>※ 카트리지는 별매입니다.</p>
				<p>※ 천연 나무 사용을 위해 캐비닛의 색상은 다소 다를 수 있습니다.</p>
			</ul>
		</p>
	`

const Post = ({match}) => {
    let detailinfo = '잘못된경로입니다';
    if (match.params.id == 1) { 
	console.log("hi 1") 
    }
    return (
	<>
        <div dangerouslySetInnerHTML={{__html: info1}}/>
		<Figure>
		  <Figure.Image
		    width={171}
		    height={180}
		    alt="dp900mii"
		    src={process.env.PUBLIC_URL+`/images/${match.params.id}/${infoWithFigure.image}`} 
		  />
		  <Figure.Caption>
			{infoWithFigure.caption}
		  </Figure.Caption>
		</Figure>
		<hr/>
        <div dangerouslySetInnerHTML={{__html: info2}}/>
		<hr/>
        <div dangerouslySetInnerHTML={{__html: info3}}/>
        </>
    );
};
export default Post;
