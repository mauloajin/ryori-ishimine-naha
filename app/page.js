const STORE_NAME = "料理 いしみね 那覇本店｜極上の和食omakaseコース";
const SHORT_NAME = "料理 いしみね";
const ADDRESS = "〒900-0014 沖縄県那覇市松尾2-17-29 タウンコート玉商Ⅱ 1F";
const PHONE = "098-963-9772";
const SITE_URL = "https://ryori-ishimine-naha.vercel.app/";
const OFFICIAL_URL = "https://naha-ishimine.com/";
const RESERVATION_URL = "https://tabelog.com/okinawa/A4701/A470101/47022217/";
const INSTAGRAM_URL = "https://www.instagram.com/isimine_.5.8/";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=%E6%96%99%E7%90%86%20%E3%81%84%E3%81%97%E3%81%BF%E3%81%AD%20%E6%B2%96%E7%B8%84%E7%9C%8C%E9%82%A3%E8%A6%87%E5%B8%82%E6%9D%BE%E5%B0%BE2-17-29";

const faq = [
  {
    question: "料理 いしみねはどこにありますか？",
    answer: `${ADDRESS}にあります。那覇市松尾、第一牧志公設市場や国際通りからも歩いて向かえるエリアです。`,
  },
  {
    question: "営業時間と定休日を教えてください。",
    answer: "営業時間は18:00〜24:00（ラストオーダー23:00）、定休日は日曜日です。営業状況は予約時に店舗へご確認ください。",
  },
  {
    question: "予約は必要ですか？",
    answer: "完全予約制です。予約サイトまたは電話で事前にご予約ください。食べたい食材やアレルギーがある場合は、予約時に店舗へご相談ください。",
  },
  {
    question: "どのような料理を楽しめますか？",
    answer: "その日に仕入れた魚や野菜を使う日本料理のおまかせコースです。マグロ節と北海道産真昆布の出汁、全国から選ぶ日本酒、沖縄作家のやちむんにもこだわっています。",
  },
  {
    question: "最寄り駅からのアクセスは？",
    answer: "ゆいレール県庁前駅から徒歩約10〜15分です。Googleマップで現在地からの経路を確認できます。",
  },
  {
    question: "How can I make a reservation?",
    answer: "Advance reservation is required. Please use the linked reservation page or call +81-98-963-9772. If you have allergies or ingredient requests, contact the restaurant when booking.",
  },
];

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: STORE_NAME,
  alternateName: [SHORT_NAME, "料理いしみね", "Ryori Ishimine"],
  url: SITE_URL,
  description: "那覇市松尾で、その日に仕入れた食材を使う日本料理のおまかせコース、マグロ節と北海道真昆布の出汁、全国の日本酒、沖縄作家のやちむんを楽しめる完全予約制の料理店。",
  telephone: "+81-98-963-9772",
  servesCuisine: ["日本料理", "和食", "Japanese cuisine", "Omakase"],
  address: {
    "@type": "PostalAddress",
    postalCode: "900-0014",
    addressRegion: "沖縄県",
    addressLocality: "那覇市",
    streetAddress: "松尾2-17-29 タウンコート玉商Ⅱ 1F",
    addressCountry: "JP",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:00",
      closes: "24:00",
    },
  ],
  hasMenu: `${OFFICIAL_URL}menu/`,
  acceptsReservations: true,
  maps: MAP_URL,
  sameAs: [OFFICIAL_URL, INSTAGRAM_URL, RESERVATION_URL],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const japaneseKeywords = [
  "料理 いしみね", "料理いしみね", "那覇本店", "那覇 和食", "那覇 日本料理", "那覇 おまかせ", "那覇 omakase", "那覇 会席料理", "那覇 割烹", "松尾 和食", "松尾 日本料理", "松尾 おまかせ", "国際通り 和食", "国際通り 日本料理", "国際通り おまかせ", "県庁前 和食", "県庁前 日本料理", "県庁前 おまかせ", "沖縄 和食", "沖縄 日本料理", "沖縄 おまかせ料理", "完全予約制 和食", "完全予約制 日本料理", "和食 コース予約", "日本料理 コース予約", "おまかせコース 予約", "旬の食材", "旬魚 日本料理", "旬菜 和食", "新鮮魚介", "季節の野菜", "当日仕入れ", "空輸食材", "マグロ節", "北海道真昆布", "和食 出汁", "日本料理 出汁", "上品な出汁", "旨味のある出汁", "やちむん", "やちむんの器", "沖縄作家の器", "器を楽しむ和食", "日本酒", "地酒", "全国の日本酒", "和食と日本酒", "日本料理と日本酒", "那覇 日本酒", "松尾 日本酒", "カウンター席", "テーブル席", "本個室", "白木カウンター", "落ち着いた店内", "予約制ディナー", "那覇 ディナー", "松尾 ディナー", "国際通り ディナー", "県庁前 ディナー", "18時営業", "日曜定休", "電話予約", "ネット予約", "食材リクエスト", "アレルギー相談", "那覇市松尾2丁目", "タウンコート玉商Ⅱ", "第一牧志公設市場 周辺", "開南 周辺", "国際通り 周辺", "県庁前駅 徒歩", "牧志駅 周辺", "美栄橋駅 周辺", "那覇空港から和食", "沖縄旅行 ディナー", "那覇旅行 日本料理", "沖縄観光 和食", "那覇観光 ディナー", "Japanese restaurant 那覇", "omakase 那覇", "和食 omakase", "日本料理 omakase", "季節のおまかせ", "魚と野菜のコース", "真昆布の出汁", "マグロ節の出汁", "料理人のおまかせ", "四季の日本料理", "沖縄の器", "予約方法", "営業時間", "定休日", "住所", "電話番号", "アクセス", "Googleマップ", "公式サイト", "公式Instagram", "食べログ予約", "那覇市 日本料理店", "松尾 日本料理店", "沖縄県 日本料理店"
];

const englishKeywords = [
  "Ryori Ishimine", "Ryouri Ishimine", "Japanese restaurant in Naha", "Naha omakase", "Naha Japanese cuisine", "Naha kaiseki dining", "Naha fine Japanese dining", "Japanese dinner in Naha", "omakase course in Okinawa", "Japanese restaurant in Okinawa", "restaurant in Matsuo Naha", "Matsuo Japanese restaurant", "restaurant near Kokusai Street", "Japanese food near Kokusai Street", "omakase near Kokusai Street", "restaurant near Kencho-mae Station", "Japanese restaurant near Kencho-mae", "dinner near Kencho-mae Station", "reservation-only restaurant Naha", "advance reservation Japanese restaurant", "seasonal Japanese cuisine", "seasonal fish and vegetables", "fresh seafood omakase", "chef's choice course", "Japanese tasting course", "traditional Japanese broth", "tuna-flake dashi", "Hokkaido kombu dashi", "Japanese sake pairing", "sake and Japanese food", "Okinawa pottery tableware", "yachimun pottery", "Okinawan ceramic artists", "counter dining in Naha", "Japanese dining counter", "Naha dinner reservation", "Okinawa dinner reservation", "Naha restaurant booking", "book Japanese restaurant Naha", "Naha opening hours", "Naha restaurant directions", "Matsuo restaurant address", "Google Maps Ryori Ishimine", "Japanese restaurant near public market", "restaurant near Makishi Public Market", "dinner near First Makishi Public Market", "Japanese food near Matsuo", "course dinner in Naha", "seasonal omakase dinner", "Japanese culinary experience Okinawa", "local dining in Naha", "where to eat Japanese food in Naha", "Naha evening dining", "Okinawa monorail restaurant", "restaurant 10 minutes from Kencho-mae", "Japanese food reservation Okinawa", "Naha food guide", "Okinawa Japanese restaurant guide", "Ryori Ishimine address", "Ryori Ishimine phone number", "Ryori Ishimine reservation", "Ryori Ishimine opening hours", "Ryori Ishimine Sunday closed", "Ryori Ishimine Instagram", "Ryori Ishimine official website", "Ryori Ishimine Google Maps", "Matsuo omakase course", "Matsuo seasonal cuisine", "Kokusai Street dinner", "Kencho-mae omakase", "Naha sake restaurant", "Japanese sake in Okinawa", "Japanese dashi cuisine Naha", "fresh ingredients Japanese course", "air-freighted seasonal ingredients", "Japanese chef's tasting menu", "quiet Japanese dinner Naha", "small Japanese restaurant Okinawa", "Okinawa travel dinner", "Naha travel restaurant", "Japanese cuisine for visitors", "Japan restaurant booking", "Naha restaurant telephone reservation", "allergy request restaurant Naha", "ingredient request omakase", "Japanese menu course", "dinner from 6 pm Naha", "restaurant closed Sunday Naha", "Naha city Matsuo 2-17-29", "Town Court Tamasho II", "Naha City Okinawa restaurant", "Okinawa Japanese dinner course", "Japanese culinary craftsmanship", "seasonal flavors of Japan", "sake selected from across Japan", "white wood counter restaurant", "Japanese tableware experience", "course dining near central Naha", "directions from Kokusai Street", "directions from Kencho-mae Station"
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="料理 いしみね トップへ">
          <span>料理</span><b>いしみね</b>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#story">こだわり</a>
          <a href="#course">おまかせ</a>
          <a href="#info">店舗情報</a>
          <a href="#english">English</a>
        </nav>
        <a className="header-reserve" href={RESERVATION_URL} target="_blank" rel="noreferrer">ご予約 <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grain" />
          <div className="hero-copy">
            <p className="kicker">JAPANESE CUISINE · NAHA, OKINAWA</p>
            <h1 id="hero-title"><small>料理</small>いしみね</h1>
            <p className="hero-place">那覇本店 <i /> 極上の和食 omakase コース</p>
            <p className="hero-lead">旬が届く、その日のための一皿。</p>
            <p className="hero-text">那覇市松尾。全国から届く魚と野菜、澄んだ出汁、沖縄の器。<br />その日に出会う食材から、ひとつのコースを仕立てます。</p>
            <div className="hero-actions">
              <a className="button light" href={RESERVATION_URL} target="_blank" rel="noreferrer">席を予約する <Arrow /></a>
              <a className="plain-link" href={`tel:${PHONE.replaceAll("-", "")}`}>{PHONE}</a>
            </div>
          </div>
          <div className="hero-art" aria-label="器と旬の食材を表現した抽象的な装飾">
            <div className="moon" />
            <div className="bowl"><span className="leaf leaf-a" /><span className="leaf leaf-b" /><span className="leaf leaf-c" /><i /></div>
            <p>季節を、ひと皿に。</p>
          </div>
          <a className="scroll" href="#story">SCROLL <span>↓</span></a>
        </section>

        <section className="intro section" id="story">
          <div className="section-label"><span>01</span> OUR PHILOSOPHY</div>
          <div className="intro-grid">
            <h2>素材、出汁、器。<br /><em>三つの余韻</em>を<br />ひとつのコースへ。</h2>
            <div className="intro-copy">
              <p className="lead">その日の朝に獲れた魚、収穫された野菜。全国各地から沖縄へ届く旬の食材を、最も自然な姿で。</p>
              <p>料理 いしみねでは、決まった品を並べるのではなく、当日の仕入れを見て料理を組み立てます。マグロ節と北海道産真昆布から引く出汁が素材の輪郭を整え、全国から選んだ日本酒が一皿ごとの余韻をつなぎます。</p>
              <p>料理を受け止めるのは、沖縄で活動する作家のやちむん。味わい、香り、手触りまで含めた日本料理の時間を、那覇・松尾でお楽しみください。</p>
            </div>
          </div>
        </section>

        <section className="pillars section-dark" aria-label="料理 いしみねのこだわり">
          <article><span>一</span><div><p>INGREDIENTS</p><h3>朝の旬を、夜の膳へ</h3><small>全国から空輸される、その日に仕入れた魚や野菜。</small></div></article>
          <article><span>二</span><div><p>DASHI</p><h3>澄みながら、深い</h3><small>マグロ節と北海道真昆布を使った、上品で旨味のある出汁。</small></div></article>
          <article><span>三</span><div><p>VESSELS &amp; SAKE</p><h3>沖縄の器、全国の酒</h3><small>作家のやちむんと、料理に寄り添う地酒・日本酒。</small></div></article>
        </section>

        <section className="course section" id="course">
          <div className="course-copy">
            <div className="section-label"><span>02</span> OMAKASE</div>
            <h2>おまかせだから、<br />今夜だけの味がある。</h2>
            <p className="lead">献立は、その日の仕入れから。</p>
            <p>季節の魚介や野菜を中心に、出汁の料理、焼き物、土鍋ご飯など、食材に合わせてコースを組み立てます。何が供されるかを待つ時間も、おまかせの楽しみです。</p>
            <p className="note">食べたい食材やアレルギーについては、予約時に店舗へご相談ください。仕入れにより内容は変わります。</p>
            <a className="button ink" href={RESERVATION_URL} target="_blank" rel="noreferrer">おまかせを予約する <Arrow /></a>
          </div>
          <div className="course-art">
            <div className="dish dish-back" />
            <div className="dish dish-front"><span /><i /><b /></div>
            <p><b>OMAKASE</b><br />seasonal tasting course</p>
          </div>
        </section>

        <section className="info section" id="info">
          <div>
            <div className="section-label"><span>03</span> INFORMATION</div>
            <h2>店舗情報</h2>
            <p className="info-intro">ご来店前にご予約ください。最新の営業状況は、予約時に店舗へ直接ご確認いただけます。</p>
          </div>
          <dl>
            <div><dt>正式店名</dt><dd>{STORE_NAME}</dd></div>
            <div><dt>料理</dt><dd>日本料理・和食／おまかせコース</dd></div>
            <div><dt>住所</dt><dd><address>{ADDRESS}</address></dd></div>
            <div><dt>電話</dt><dd><a href={`tel:${PHONE.replaceAll("-", "")}`}>{PHONE}</a></dd></div>
            <div><dt>営業時間</dt><dd>18:00〜24:00（L.O.23:00）</dd></div>
            <div><dt>定休日</dt><dd>日曜日</dd></div>
            <div><dt>予約</dt><dd>完全予約制<br /><a href={RESERVATION_URL} target="_blank" rel="noreferrer">オンライン予約 <Arrow /></a></dd></div>
            <div><dt>公式情報</dt><dd className="link-row"><a href={OFFICIAL_URL} target="_blank" rel="noreferrer">公式サイト <Arrow /></a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram <Arrow /></a></dd></div>
          </dl>
        </section>

        <section className="access" id="access">
          <div className="access-map" aria-hidden="true">
            <span className="road r1" /><span className="road r2" /><span className="road r3" /><span className="road r4" />
            <span className="map-label market">第一牧志公設市場</span><span className="map-label kokusai">国際通り</span><span className="map-label station">県庁前駅</span>
            <div className="map-pin"><b>い</b></div>
          </div>
          <div className="access-copy">
            <div className="section-label light-label"><span>04</span> ACCESS</div>
            <h2>那覇・松尾へ。</h2>
            <address>{ADDRESS}</address>
            <p>ゆいレール県庁前駅から徒歩約10〜15分。第一牧志公設市場や国際通りからも徒歩圏内です。</p>
            <a className="button light" href={MAP_URL} target="_blank" rel="noreferrer">Googleマップを開く <Arrow /></a>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div>
            <div className="section-label"><span>05</span> FAQ</div>
            <h2>よくあるご質問</h2>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>Q{String(index + 1).padStart(2, "0")}</span>{item.question}<i>＋</i></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="english section-dark" id="english" lang="en">
          <div>
            <div className="section-label light-label"><span>06</span> ENGLISH GUIDE</div>
            <h2>Ryori Ishimine<br /><em>Naha, Okinawa</em></h2>
          </div>
          <div className="english-copy">
            <p className="lead">A reservation-only Japanese restaurant in Matsuo, central Naha, serving a seasonal omakase course shaped by the ingredients arriving that day.</p>
            <p>Ryori Ishimine prepares Japanese cuisine with fish and vegetables sourced from across Japan and flown to Okinawa while fresh. Its dashi is made from tuna flakes and Hokkaido kombu, giving the dishes a clean yet savory foundation. The meal is presented on yachimun pottery selected from Okinawan artists, with sake sourced from breweries and retailers around Japan.</p>
            <p>The course changes with the day’s market and season. Guests may ask about preferred ingredients or allergies when reserving. An advance reservation is required. The restaurant is in Matsuo, within walking distance of Kokusai Street and First Makishi Public Market, and about 10–15 minutes on foot from Kencho-mae Station on the Yui Rail.</p>
            <dl>
              <div><dt>NAME</dt><dd>{STORE_NAME}<br />(Ryori Ishimine)</dd></div>
              <div><dt>CUISINE</dt><dd>Japanese cuisine / seasonal omakase course</dd></div>
              <div><dt>ADDRESS</dt><dd>Town Court Tamasho II 1F, 2-17-29 Matsuo, Naha, Okinawa 900-0014, Japan</dd></div>
              <div><dt>HOURS</dt><dd>6:00 pm–12:00 am (last order 11:00 pm)</dd></div>
              <div><dt>CLOSED</dt><dd>Sunday</dd></div>
              <div><dt>RESERVATION</dt><dd>Advance reservation required. <a href={RESERVATION_URL} target="_blank" rel="noreferrer">Book online <Arrow /></a> or call <a href={`tel:+81989639772`}>+81-98-963-9772</a>.</dd></div>
              <div><dt>DIRECTIONS</dt><dd>About a 10–15 minute walk from Kencho-mae Station. <a href={MAP_URL} target="_blank" rel="noreferrer">Open Google Maps <Arrow /></a></dd></div>
            </dl>
          </div>
        </section>

        <section className="keywords section" aria-labelledby="keywords-title">
          <div className="section-label"><span>07</span> SEARCH GUIDE</div>
          <h2 id="keywords-title">料理 いしみねを探す</h2>
          <p>那覇市松尾で日本料理や和食のおまかせコースを探している方へ。料理 いしみねは、県庁前駅、国際通り、第一牧志公設市場、開南周辺から向かえる完全予約制の日本料理店です。営業時間、住所、電話番号、予約方法、Googleマップへのリンクをこのページにまとめています。</p>
          <details>
            <summary><span>JP</span>日本語の関連検索語<i>＋</i></summary>
            <p className="keyword-cloud">{japaneseKeywords.join(" · ")}</p>
          </details>
          <details>
            <summary><span>EN</span>English search terms<i>＋</i></summary>
            <p className="keyword-cloud" lang="en">{englishKeywords.join(" · ")}</p>
          </details>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span>料理</span><b>いしみね</b><small>那覇本店｜極上の和食omakaseコース</small></div>
        <div><p>{ADDRESS}</p><a href={`tel:${PHONE.replaceAll("-", "")}`}>{PHONE}</a></div>
        <div className="footer-links"><a href={RESERVATION_URL} target="_blank" rel="noreferrer">予約</a><a href={MAP_URL} target="_blank" rel="noreferrer">地図</a><a href={OFFICIAL_URL} target="_blank" rel="noreferrer">公式サイト</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></div>
        <p className="copyright">© 料理 いしみね</p>
      </footer>
    </>
  );
}
