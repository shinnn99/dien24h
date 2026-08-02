import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Cable,
  CircuitBoard,
  ClipboardList,
  Factory,
  MapPin,
  Package,
  SearchCheck,
  ShieldCheck,
  SolarPanel,
  ToggleRight,
  UtilityPole,
  Zap,
} from 'lucide-react'

import cadiviCableImg from '../assets/catalog/cables/cadivi-cxv.jpg'
import lsVinaCableImg from '../assets/catalog/cables/ls-vina-low-voltage.jpg'
import tranPhuCableImg from '../assets/catalog/cables/tran-phu-cxv.jpg'
import tayaCableImg from '../assets/catalog/cables/taya-cables.jpg'
import schneiderIc60Img from '../assets/catalog/switchgear/schneider-ic60.jpg'
import lsSusolImg from '../assets/catalog/switchgear/ls-susol.png'
import mitsubishiBreakersImg from '../assets/catalog/switchgear/mitsubishi-breakers.png'
import chintNxmImg from '../assets/catalog/switchgear/chint-nxm.png'
import schneiderPrismaSetImg from '../assets/catalog/cabinets/schneider-prismaset.jpg'
import abbSystemProEImg from '../assets/catalog/cabinets/abb-system-pro-e.jpg'
import siemensSivaconImg from '../assets/catalog/cabinets/siemens-sivacon.jpg'
import schneiderVarSetImg from '../assets/catalog/cabinets/schneider-varset.jpg'
import longiHiMoX10Img from '../assets/catalog/solar/longi-hi-mo-x10.jpg'
import jinkoTigerNeoImg from '../assets/catalog/solar/jinko-tiger-neo.png'
import huaweiSun2000Img from '../assets/catalog/solar/huawei-sun2000.png'
import sungrowSg125Img from '../assets/catalog/solar/sungrow-sg125cx.png'
import schneiderIprdImg from '../assets/catalog/lightning/schneider-iprd.jpg'
import dehnVentilImg from '../assets/catalog/lightning/dehnventil.png'
import oboMcdImg from '../assets/catalog/lightning/obo-mcd.jpg'
import lpiStormasterImg from '../assets/catalog/lightning/lpi-stormaster.jpg'

export type CatalogCategoryKey = 'cables' | 'switchgear' | 'cabinets' | 'solar' | 'lightning'

export type CatalogProduct = {
  brand: string
  maker: string
  product: string
  image: string
  imageAlt: string
  sourceHref: string
  sourceLabel: string
  families: string[]
  filters: string[]
  facts: [string, string][]
  note: string
}

type IconText = [LucideIcon, string, string]
type RelatedItem = [LucideIcon, string, string, string]

export type CatalogCategoryConfig = {
  slug: string
  pageName: string
  eyebrow: string
  heroLead: string
  heroHighlight: string
  intro: string
  heroServices: string[]
  quickFacts: IconText[]
  catalogTitle: string
  catalogIntro: string
  filterLabel: string
  filterOptions: string[]
  products: CatalogProduct[]
  specsTitle: string
  specsIntro: string
  specGroups: [string, string[]][]
  applicationsIntro: string
  applications: IconText[]
  guideTitle: string
  guideIntro: string
  steps: IconText[]
  scopeTitle: string
  scopeIntro: string
  scope: string[]
  requestTitle: string
  requestIntro: string
  requestPrep: string[]
  form: {
    needLabel: string
    needPlaceholder: string
    detailOneLabel: string
    detailOnePlaceholder: string
    detailTwoLabel: string
    detailTwoPlaceholder: string
    installationLabel: string
    installationOptions: string[]
    attachmentNote: string
  }
  related: RelatedItem[]
  questions: string[][]
}

const commonScope = [
  'Tiếp nhận nhu cầu và hồ sơ kỹ thuật đang có',
  'Đối chiếu đúng dòng sản phẩm và tài liệu hãng',
  'Lập cấu hình, khối lượng và báo giá để xác nhận',
  'Giao thiết bị theo phạm vi của đơn hàng',
  'Hỗ trợ lắp đặt khi được thống nhất trong báo giá',
  'Bàn giao hồ sơ thực tế theo thiết bị được cung cấp',
]

const commonSteps: IconText[] = [
  [ClipboardList, 'Gửi nhu cầu thực tế', 'Cung cấp tải, số lượng, hiện trạng hoặc bản vẽ đang có của công trình.'],
  [Zap, 'Chốt điều kiện điện', 'Xác nhận điện áp, dòng tải, sơ đồ và các yêu cầu bảo vệ liên quan.'],
  [MapPin, 'Kiểm tra nơi lắp đặt', 'Đối chiếu môi trường, không gian, tuyến đi dây và thời điểm cần thiết bị.'],
  [SearchCheck, 'Đối chiếu đúng model', 'Kỹ sư kiểm tra catalogue, datasheet và điều kiện áp dụng trước khi báo giá.'],
]

export const catalogCategoryConfigs: Record<CatalogCategoryKey, CatalogCategoryConfig> = {
  cables: {
    slug: 'day-cap-dien',
    pageName: 'Dây cáp điện',
    eyebrow: 'DANH MỤC KỸ THUẬT • DÂY & CÁP',
    heroLead: 'Dây cáp điện cho',
    heroHighlight: 'nhà xưởng & công trình',
    intro: 'Đối chiếu chủng loại, cấp điện áp, cấu tạo ruột dẫn, cách điện và điều kiện lắp đặt theo đúng mã cáp. Tiết diện và khả năng mang tải chỉ được chốt sau khi có chiều dài tuyến, phương pháp lắp và dữ liệu phụ tải.',
    heroServices: ['Đối chiếu đúng mã cáp', 'Tính theo tuyến thực tế', 'Hỗ trợ hồ sơ kỹ thuật'],
    quickFacts: [
      [Zap, 'Cấp điện áp', 'Hạ thế đến trung thế'],
      [Cable, 'Ruột dẫn', 'Đồng hoặc nhôm'],
      [Package, 'Cách điện', 'PVC hoặc XLPE'],
      [SearchCheck, 'Nguồn dữ liệu', '4 hãng đã đối chiếu'],
    ],
    catalogTitle: 'Chọn theo thương hiệu và nhóm cáp',
    catalogIntro: 'Mỗi card chỉ nêu dữ liệu của dòng hoặc danh mục được liên kết. Không dùng một thông số chung cho toàn bộ sản phẩm của cùng hãng.',
    filterLabel: 'Nhóm cáp',
    filterOptions: ['Hạ thế', 'Trung thế', 'Điều khiển', 'Chống cháy / LSZH', 'Solar DC', 'Có giáp'],
    products: [
      {
        brand: 'CADIVI',
        maker: 'Công ty CP Dây Cáp Điện Việt Nam',
        product: 'Dây và cáp điện CADIVI',
        image: cadiviCableImg,
        imageAlt: 'Cáp điện lực hạ thế CXV của CADIVI',
        sourceHref: 'https://cadivi.vn/vn/day-va-cap-dien-luc-ha-the.html',
        sourceLabel: 'Danh mục cáp hạ thế CADIVI',
        families: ['CV / CVV', 'CXV / CXE', 'Cáp trung thế', 'Cáp điều khiển'],
        filters: ['Hạ thế', 'Trung thế', 'Điều khiển', 'Chống cháy / LSZH', 'Có giáp'],
        facts: [
          ['Dòng hạ thế tham chiếu', 'CV, CVV, CXV và CXE'],
          ['Cấp điện áp công bố', '300/500 V hoặc 0,6/1 kV tùy dòng'],
          ['Cấu tạo điển hình', 'Cu/PVC, Cu/PVC/PVC, Cu/XLPE/PVC hoặc HDPE'],
        ],
        note: 'Biến thể giáp, tiết diện và tiêu chuẩn phải lấy từ đúng mã hoặc danh mục chứng nhận; không áp chứng nhận của một nhóm cho mọi cáp CADIVI.',
      },
      {
        brand: 'LS VINA',
        maker: 'LS VINA Cable & System',
        product: 'Cáp trung thế & hạ thế LS VINA',
        image: lsVinaCableImg,
        imageAlt: 'Cáp điện lực hạ thế LS VINA Cable & System',
        sourceHref: 'https://lsvinacns.vn/cap-ha-the',
        sourceLabel: 'Trang cáp hạ thế LS VINA',
        families: ['Cáp trung thế', 'Cáp hạ thế', 'Cáp chống cháy', 'Cáp DC Solar'],
        filters: ['Hạ thế', 'Trung thế', 'Điều khiển', 'Chống cháy / LSZH', 'Solar DC'],
        facts: [
          ['Nhóm sản phẩm hãng công bố', 'Trung thế, hạ thế, điều khiển, chống cháy và DC Solar'],
          ['Trang cáp hạ thế', 'Cách điện XLPE; nhiệt độ làm việc được nêu 90°C'],
          ['Ứng dụng hãng nêu', 'Khu công nghiệp và tòa nhà thương mại'],
        ],
        note: 'Đặc tính ít khói, chống cháy hoặc chống bén cháy chỉ được xác nhận khi đúng construction và mã FR/LSZH trong catalogue.',
      },
      {
        brand: 'TRẦN PHÚ',
        maker: 'Cơ điện Trần Phú • TRAFUCO',
        product: 'Cáp điện lực hạ thế CXV 0,6/1 kV',
        image: tranPhuCableImg,
        imageAlt: 'Cáp điện lực hạ thế CXV Trần Phú',
        sourceHref: 'https://www.tranphucable.com.vn/cap-dien-luc-ha-the/cap-dien-luc-ha-the-01',
        sourceLabel: 'Dòng CXV hạ thế Trần Phú',
        families: ['CXV 0,6/1 kV', '1 đến 4 lõi', 'Cu/XLPE/PVC'],
        filters: ['Hạ thế'],
        facts: [
          ['Dòng được đối chiếu', 'CXV 0,6/1 kV, lắp cố định'],
          ['Cấu trúc / số lõi', 'Cu/XLPE/PVC; 1 đến 4 lõi'],
          ['Tiêu chuẩn dòng này', 'IEC 60502-1, IEC 60228, TCVN 5935-1 và TCVN 6612'],
        ],
        note: 'Nhiệt độ XLPE và thông số ngắn mạch trên nguồn thuộc đúng dòng CXV này, không dùng để mô tả dây dân dụng hoặc cáp điều khiển khác của hãng.',
      },
      {
        brand: 'TAYA',
        maker: 'TAYA Việt Nam',
        product: 'Danh mục dây & cáp điện TAYA',
        image: tayaCableImg,
        imageAlt: 'Nhóm dây và cáp điện TAYA Việt Nam',
        sourceHref: 'https://taya.com.vn/san-pham/DAY-CAP-DIEN-ac47.html',
        sourceLabel: 'Danh mục dây cáp TAYA',
        families: ['IV / VV', 'CXV', 'Cáp có giáp', 'Cáp điều khiển'],
        filters: ['Hạ thế', 'Điều khiển', 'Có giáp'],
        facts: [
          ['Dây IV', '600 V, 450/750 V hoặc 0,6/1 kV tùy mã'],
          ['Cáp VV / CXV', 'PVC/PVC hoặc XLPE/PVC theo đúng dòng'],
          ['Biến thể công bố', 'Giáp băng DATA/DSTA và giáp sợi AWA/SWA'],
        ],
        note: 'Trang hãng có PDF riêng cho từng dòng; cấu tạo, kích thước và dòng cho phép phải lấy từ đúng datasheet thay vì suy ra từ tên nhóm.',
      },
    ],
    specsTitle: 'Thông số phải chốt cho từng mã cáp',
    specsIntro: 'Không chọn tiết diện chỉ từ công suất. Chiều dài tuyến, cách lắp, nhiệt độ, nhóm cáp và yêu cầu sụt áp đều ảnh hưởng đến kết quả.',
    specGroups: [
      ['Thông số điện', ['Điện áp danh định và AC/DC', 'Dòng tải thiết kế', 'Số lõi và tiết diện', 'Giới hạn sụt áp', 'Khả năng chịu dòng ngắn mạch']],
      ['Cấu tạo cáp', ['Ruột đồng hoặc nhôm', 'Cách điện PVC hoặc XLPE', 'Vỏ PVC, PE hoặc LSZH', 'Màn chắn và giáp nếu cần', 'Yêu cầu chậm cháy / chống cháy']],
      ['Tuyến & lắp đặt', ['Chiều dài từng tuyến', 'Đi nổi, máng, ống hay chôn ngầm', 'Nhiệt độ và số cáp đi chung', 'Bán kính uốn và đầu cáp', 'Chiều dài đóng gói / tang cáp']],
      ['Hồ sơ cần nhận', ['Datasheet đúng mã', 'Tiêu chuẩn và chứng chỉ tương ứng', 'Bảng thông số điện và kích thước', 'Kết quả thử khi có trong phạm vi', 'Điều kiện giao hàng và bảo hành']],
    ],
    applicationsIntro: 'Nhóm ứng dụng giúp xác định bước đầu; mã cáp cuối cùng cần được tính theo tải, tuyến và điều kiện lắp thực tế.',
    applications: [
      [Factory, 'Nhà máy & dây chuyền', 'Cáp động lực, điều khiển và các yêu cầu chống cháy theo khu vực lắp đặt.'],
      [Building2, 'Tòa nhà & thương mại', 'Cáp cấp nguồn, nhánh phân phối và cấu tạo vỏ theo yêu cầu công trình.'],
      [UtilityPole, 'Lưới điện & trạm', 'Cáp trung thế, hạ thế và phụ kiện đầu nối theo cấp điện áp.'],
      [SolarPanel, 'Solar & nguồn DC', 'Cáp DC chuyên dụng phải khớp điện áp, môi trường và chuẩn đầu nối của hệ thống.'],
    ],
    guideTitle: 'Bốn bước trước khi yêu cầu báo giá',
    guideIntro: 'Dữ liệu tuyến càng rõ, việc tính tiết diện và đối chiếu catalogue càng nhanh.',
    steps: commonSteps,
    scopeTitle: 'Từ bảng tải đến danh mục cáp theo tuyến',
    scopeIntro: 'Phạm vi tính toán, cung cấp, giao hàng và hỗ trợ lắp đặt được xác nhận theo từng yêu cầu và đơn hàng.',
    scope: commonScope,
    requestTitle: 'Nhận cấu hình cáp và báo giá theo tuyến',
    requestIntro: 'Gửi bảng tải, chiều dài hoặc bản vẽ đang có. Kỹ sư sẽ xác định phần dữ liệu còn thiếu trước khi chốt mã cáp.',
    requestPrep: ['Tải hoặc dòng điện của từng tuyến', 'Điện áp và chiều dài tuyến', 'Cách lắp đặt và môi trường', 'Số lõi, vật liệu ruột nếu đã chốt', 'Bản vẽ hoặc bảng cáp nếu có'],
    form: {
      needLabel: 'Khối lượng hoặc tuyến cáp dự kiến',
      needPlaceholder: 'Ví dụ: 3 tuyến, mỗi tuyến khoảng 120 m',
      detailOneLabel: 'Điện áp / loại cáp',
      detailOnePlaceholder: 'Ví dụ: CXV 0,6/1 kV',
      detailTwoLabel: 'Số lõi & tiết diện dự kiến',
      detailTwoPlaceholder: 'Ví dụ: 4C × 120 mm² hoặc chưa xác định',
      installationLabel: 'Phương pháp lắp đặt',
      installationOptions: ['Chưa xác định', 'Đi trên máng / thang cáp', 'Đi trong ống', 'Chôn ngầm', 'Đi ngoài trời'],
      attachmentNote: 'Sau khi email mở, có thể đính kèm bảng tải, sơ đồ một sợi, bảng cáp hoặc bản vẽ tuyến trước khi bấm Gửi.',
    },
    related: [
      [UtilityPole, 'Máy biến áp', 'Đối chiếu công suất và cấp điện áp của nguồn cấp.', '/san-pham/may-bien-ap'],
      [ToggleRight, 'Thiết bị đóng cắt', 'Phối hợp bảo vệ theo dòng tải và dòng ngắn mạch.', '/san-pham/thiet-bi-dong-cat'],
      [CircuitBoard, 'Tủ điện & tủ tụ bù', 'Chốt đầu cáp, dòng tủ và bố trí tuyến vào ra.', '/san-pham/tu-dien-tu-tu-bu'],
      [Factory, 'Điện công nghiệp', 'Trao đổi phạm vi thi công và đấu nối tại công trình.', '/dich-vu/dien-cong-nghiep'],
    ],
    questions: [
      ['Có thể chọn tiết diện cáp chỉ theo công suất không?', 'Chưa đủ. Cần thêm điện áp, chiều dài, cách lắp, nhiệt độ, số cáp đi chung, sụt áp cho phép và điều kiện ngắn mạch.'],
      ['CV, CVV và CXV có giống nhau không?', 'Không. Ký hiệu thể hiện cấu tạo khác nhau; cần đọc đúng quy ước và datasheet của từng nhà sản xuất, không chỉ nhìn tên gần giống.'],
      ['Cáp chống cháy và cáp chậm cháy có phải một loại không?', 'Không nên xem là tương đương. Yêu cầu duy trì mạch, hạn chế cháy lan, khói và halogen phải được chốt theo tiêu chuẩn cùng đúng mã cáp.'],
      ['Trang có chốt sẵn chiều dài tang và thời gian giao không?', 'Không. Chiều dài đóng gói, tồn kho và tiến độ phụ thuộc mã, tiết diện, khối lượng và xác nhận tại thời điểm báo giá.'],
    ],
  },

  switchgear: {
    slug: 'thiet-bi-dong-cat',
    pageName: 'Thiết bị đóng cắt',
    eyebrow: 'DANH MỤC KỸ THUẬT • ĐÓNG CẮT & BẢO VỆ',
    heroLead: 'Thiết bị đóng cắt',
    heroHighlight: 'cho hệ thống điện',
    intro: 'Đối chiếu loại thiết bị, dòng định mức, số cực, khả năng cắt và bộ bảo vệ theo đúng sơ đồ. Icu, Ics, Icn và đặc tính tác động không được dùng thay thế lẫn nhau hoặc gộp thành một thông số chung.',
    heroServices: ['Chọn đúng loại thiết bị', 'Đối chiếu Icu / Ics / Icn', 'Kiểm tra phụ kiện & phối hợp'],
    quickFacts: [
      [ToggleRight, 'Nhóm thiết bị', 'MCB · MCCB · ACB'],
      [Zap, 'Hệ điện', 'AC hoặc DC'],
      [ShieldCheck, 'Bảo vệ', 'Quá tải · ngắn mạch · rò'],
      [SearchCheck, 'Nguồn dữ liệu', '4 hãng đã đối chiếu'],
    ],
    catalogTitle: 'Chọn theo hãng và loại thiết bị',
    catalogIntro: 'Giá trị cực đại trên một dải sản phẩm không có nghĩa mọi mã trong dải đều đạt cùng mức dòng hoặc khả năng cắt.',
    filterLabel: 'Loại thiết bị',
    filterOptions: ['MCB', 'MCCB', 'ACB', 'ELCB / RCCB / RCBO', 'Thiết bị DC'],
    products: [
      {
        brand: 'SCHNEIDER ELECTRIC',
        maker: 'Dòng Acti9',
        product: 'Acti9 iC60',
        image: schneiderIc60Img,
        imageAlt: 'Aptomat tép Schneider Electric Acti9 iC60',
        sourceHref: 'https://www.se.com/vn/vi/product-range/7556-acti-9-ic60/',
        sourceLabel: 'Dòng Acti9 iC60',
        families: ['MCB', '1–63 A', 'Đường cong B/C/D/K/Z/MA'],
        filters: ['MCB'],
        facts: [
          ['Dòng định mức của dải', '1 đến 63 A'],
          ['Điện áp làm việc', 'Đến 440 VAC theo cấu hình'],
          ['Khả năng cắt / đặc tính', 'Đến 100 kA và nhiều đường cong; phải chốt đúng mã'],
        ],
        note: 'Khả năng cắt và tiêu chuẩn áp dụng phụ thuộc mã iC60 cụ thể; không gộp thông số của iC60 với EasyPact CVS hoặc ComPacT NSX.',
      },
      {
        brand: 'LS ELECTRIC',
        maker: 'Dòng Susol',
        product: 'Susol MCCB',
        image: lsSusolImg,
        imageAlt: 'MCCB LS ELECTRIC Susol',
        sourceHref: 'https://www.ls-electric.com/products/view/Smart_Power_Solution/Low_Voltage/MCCB_%26_ELCB/Susol_MCCB',
        sourceLabel: 'Dòng Susol MCCB',
        families: ['MCCB', '2P / 3P / 4P', 'Trip nhiệt-từ hoặc điện tử'],
        filters: ['MCCB'],
        facts: [
          ['Dòng định mức của dải', '16 đến 1.600 A'],
          ['Frame / khả năng cắt', '100–1.600 AF; Icu 37–150 kA tùy mã'],
          ['Tiêu chuẩn hãng nêu', 'IEC 60947-2'],
        ],
        note: 'Các cực trị Icu và Ics là dải toàn họ. Mỗi mã phải được đối chiếu điện áp, frame, trip unit và bảng khả năng cắt riêng.',
      },
      {
        brand: 'MITSUBISHI ELECTRIC',
        maker: 'Low-voltage circuit breakers',
        product: 'Dòng máy cắt hạ thế Mitsubishi',
        image: mitsubishiBreakersImg,
        imageAlt: 'Nhóm máy cắt hạ thế Mitsubishi Electric',
        sourceHref: 'https://www.mitsubishielectric.com/fa/products/lvd/lvcb/',
        sourceLabel: 'Danh mục máy cắt hạ thế',
        families: ['ACB', 'MCCB', 'ELCB', 'MCB / RCCB / RCBO'],
        filters: ['MCB', 'MCCB', 'ACB', 'ELCB / RCCB / RCBO', 'Thiết bị DC'],
        facts: [
          ['Nhóm được hãng công bố', 'ACB, MCCB, ELCB, MCB, RCCB và RCBO'],
          ['Thiết bị DC', 'Danh mục có MCCB cho ứng dụng đến 1.000 VDC'],
          ['Dòng MCCB chủ lực', 'WS-V; thông số chi tiết theo model'],
        ],
        note: 'Trang danh mục không đưa ra một dải In hoặc Icu chung cho mọi sản phẩm Mitsubishi; cần catalogue và mã cụ thể trước khi chốt.',
      },
      {
        brand: 'CHINT',
        maker: 'Dòng NXM',
        product: 'NXM MCCB',
        image: chintNxmImg,
        imageAlt: 'MCCB CHINT NXM',
        sourceHref: 'https://www.chintglobal.com/global/en/products/low-voltage/iec/secondary-power-distribution/nxm.html',
        sourceLabel: 'Dòng NXM MCCB',
        families: ['MCCB', '2P / 3P / 4P', 'Fixed / plug-in'],
        filters: ['MCCB'],
        facts: [
          ['Dòng định mức của dải', '16 đến 1.600 A tùy frame'],
          ['Khả năng cắt công bố', 'Đến 70 kA tại 400 VAC; đến 50 kA tại 690 VAC'],
          ['Tiêu chuẩn hãng nêu', 'IEC/EN 60947-1, -2 và -3'],
        ],
        note: 'Mức khả năng cắt cao nhất chỉ thuộc biến thể tương ứng. Số cực, kiểu lắp và trip unit phải được xác nhận theo mã NXM.',
      },
    ],
    specsTitle: 'Thông số phải chốt cho từng thiết bị',
    specsIntro: 'Không chọn máy cắt chỉ theo dòng định mức. Sơ đồ, dòng ngắn mạch, phối hợp bảo vệ và điều kiện lắp đặt đều cần được kiểm tra.',
    specGroups: [
      ['Chức năng & hệ điện', ['MCB, MCCB, ACB hay thiết bị rò', 'AC hoặc DC và điện áp Ue', 'Dòng định mức In và frame', 'Số cực', 'Chức năng cách ly nếu yêu cầu']],
      ['Khả năng bảo vệ', ['Icu / Ics hoặc Icn đúng tiêu chuẩn', 'Đường cong hoặc trip unit', 'Dải chỉnh định bảo vệ', 'IΔn và type nếu có bảo vệ rò', 'Phối hợp và tính chọn lọc']],
      ['Lắp đặt & phụ kiện', ['DIN, fixed, plug-in hay draw-out', 'Tiếp điểm phụ và cuộn thao tác', 'Motor operator / interlock', 'Không gian và nhiệt độ trong tủ', 'Đầu nối, thanh cái và cáp']],
      ['Hồ sơ cần nhận', ['Catalogue và datasheet đúng mã', 'Bảng khả năng cắt theo điện áp', 'Sơ đồ phụ kiện', 'Chứng chỉ / tiêu chuẩn tương ứng', 'Điều kiện bảo hành và giao hàng']],
    ],
    applicationsIntro: 'Vị trí trên sơ đồ giúp định hướng loại thiết bị; model cuối cùng vẫn phải qua tính toán và kiểm tra phối hợp bảo vệ.',
    applications: [
      [Building2, 'Mạch nhánh tòa nhà', 'MCB hoặc thiết bị bảo vệ rò theo loại tải và yêu cầu an toàn.'],
      [CircuitBoard, 'Tủ phân phối chính', 'MCCB hoặc ACB theo dòng tải, dòng ngắn mạch và phương thức vận hành.'],
      [Factory, 'Động cơ & dây chuyền', 'Chọn bảo vệ, contactor và relay theo đặc tính khởi động và phối hợp.'],
      [SolarPanel, 'Nguồn Solar & DC', 'Thiết bị phải phù hợp điện áp DC, chiều dòng và yêu cầu cách ly của hệ thống.'],
    ],
    guideTitle: 'Bốn bước trước khi yêu cầu báo giá',
    guideIntro: 'Sơ đồ một sợi và dữ liệu ngắn mạch giúp hạn chế chọn sai frame hoặc khả năng cắt.',
    steps: commonSteps,
    scopeTitle: 'Từ sơ đồ một sợi đến đúng mã thiết bị',
    scopeIntro: 'Phạm vi tính chọn, cung cấp và hỗ trợ lắp đặt được xác nhận theo hồ sơ cùng báo giá của từng công trình.',
    scope: commonScope,
    requestTitle: 'Nhận cấu hình đóng cắt theo sơ đồ',
    requestIntro: 'Gửi loại tải, điện áp, dòng và sơ đồ đang có. Kỹ sư sẽ đối chiếu thêm khả năng cắt, trip unit và phụ kiện cần thiết.',
    requestPrep: ['Loại thiết bị và số lượng', 'Điện áp AC/DC và dòng tải', 'Icu/Ics hoặc dòng ngắn mạch nếu có', 'Số cực và chức năng bảo vệ', 'Sơ đồ một sợi / danh mục hiện hữu'],
    form: {
      needLabel: 'Dòng tải / số lượng dự kiến',
      needPlaceholder: 'Ví dụ: 12 MCCB 3P, dòng 100–250 A',
      detailOneLabel: 'Điện áp làm việc',
      detailOnePlaceholder: 'Ví dụ: 400/415 VAC hoặc 750 VDC',
      detailTwoLabel: 'Icu / Ics / Icn yêu cầu',
      detailTwoPlaceholder: 'Ví dụ: Icu 36 kA tại 415 V hoặc chưa có',
      installationLabel: 'Kiểu lắp đặt',
      installationOptions: ['Chưa xác định', 'DIN rail', 'Fixed', 'Plug-in', 'Draw-out'],
      attachmentNote: 'Sau khi email mở, có thể đính kèm sơ đồ một sợi, bảng tải, danh sách thiết bị hoặc ảnh tủ hiện tại trước khi bấm Gửi.',
    },
    related: [
      [CircuitBoard, 'Tủ điện & tủ tụ bù', 'Phối hợp thiết bị trong tủ và khả năng chịu ngắn mạch.', '/san-pham/tu-dien-tu-tu-bu'],
      [Cable, 'Dây cáp điện', 'Đối chiếu dòng tải, tiết diện và đầu nối.', '/san-pham/day-cap-dien'],
      [UtilityPole, 'Máy biến áp', 'Kiểm tra nguồn cấp và mức ngắn mạch phía hạ thế.', '/san-pham/may-bien-ap'],
      [Factory, 'Điện công nghiệp', 'Trao đổi lắp đặt, thay thế và đấu nối tại công trình.', '/dich-vu/dien-cong-nghiep'],
    ],
    questions: [
      ['Icu, Ics và Icn có dùng thay cho nhau được không?', 'Không. Chúng thuộc phạm vi và tiêu chuẩn đánh giá khác nhau; phải dùng đúng đại lượng được yêu cầu cho loại thiết bị và hồ sơ thiết kế.'],
      ['MCCB dòng 250 A có nghĩa cài cố định ở 250 A không?', 'Không phải lúc nào cũng vậy. Frame, dòng định mức, loại trip unit và dải chỉnh định phụ thuộc đúng mã thiết bị.'],
      ['Có thể thay MCCB khác hãng nếu cùng dòng định mức không?', 'Chưa đủ cơ sở. Cần so sánh điện áp, Icu/Ics, số cực, kích thước, đầu nối, trip unit, phụ kiện và yêu cầu phối hợp.'],
      ['Trang có khẳng định hàng sẵn kho không?', 'Không. Model, số lượng, tình trạng cung ứng và thời gian giao được xác nhận riêng tại thời điểm báo giá.'],
    ],
  },

  cabinets: {
    slug: 'tu-dien-tu-tu-bu',
    pageName: 'Tủ điện & tủ tụ bù',
    eyebrow: 'DANH MỤC KỸ THUẬT • TỦ HẠ THẾ',
    heroLead: 'Tủ điện & tủ tụ bù',
    heroHighlight: 'theo hồ sơ công trình',
    intro: 'Đối chiếu nền tảng tủ phân phối, MCC và giải pháp bù công suất phản kháng theo đúng dòng sản phẩm. Dòng định mức, Icw, cấp IP, dạng phân khoang và công suất bù phải được chốt từ sơ đồ, tải và điều kiện lắp đặt.',
    heroServices: ['Tiếp nhận sơ đồ một sợi', 'Đối chiếu nền tảng tủ', 'Kiểm tra tải & sóng hài'],
    quickFacts: [
      [CircuitBoard, 'Nhóm tủ', 'PCC · MCC · phân phối'],
      [Zap, 'Bù công suất', 'Cố định hoặc tự động'],
      [ShieldCheck, 'Hồ sơ chính', 'IEC 61439 theo cấu hình'],
      [SearchCheck, 'Nguồn dữ liệu', '4 dòng đã đối chiếu'],
    ],
    catalogTitle: 'Chọn theo nền tảng tủ và chức năng',
    catalogIntro: 'Tủ lắp ráp theo dự án không có một bộ thông số mặc định. Mỗi giải pháp dưới đây chỉ mang dữ liệu của đúng nền tảng hoặc dòng hãng.',
    filterLabel: 'Chức năng',
    filterOptions: ['Tủ phân phối', 'MCC', 'Tủ mô-đun', 'Tủ tụ bù', 'Tụ bù rời'],
    products: [
      {
        brand: 'SCHNEIDER ELECTRIC',
        maker: 'PrismaSeT',
        product: 'PrismaSeT I',
        image: schneiderPrismaSetImg,
        imageAlt: 'Hệ tủ phân phối hạ thế Schneider Electric PrismaSeT I',
        sourceHref: 'https://www.se.com/vn/vi/product-range/126303687-prismaset-i/',
        sourceLabel: 'Nền tảng PrismaSeT I',
        families: ['PCC', 'MCC', 'APFC', 'Transfer'],
        filters: ['Tủ phân phối', 'MCC', 'Tủ mô-đun', 'Tủ tụ bù'],
        facts: [
          ['Dòng định mức nền tảng', 'Đến 4.000 A'],
          ['Chức năng hãng nêu', 'PCC, MCC, APFC, transfer và số hóa'],
          ['Tiêu chuẩn nền tảng', 'IEC 61439-1/-2 Ed.3'],
        ],
        note: 'Khả năng chịu ngắn mạch, kích thước, form ngăn và cấp IP phụ thuộc cấu hình tủ thực tế, không suy ra chỉ từ tên PrismaSeT I.',
      },
      {
        brand: 'ABB',
        maker: 'System pro E',
        product: 'System pro E energy',
        image: abbSystemProEImg,
        imageAlt: 'Hệ tủ điện ABB System pro E energy',
        sourceHref: 'https://new.abb.com/low-voltage/nl-be/productaanbod/enclosures/Sub-distribution-boards/system-pro-e-energy',
        sourceLabel: 'System pro E energy',
        families: ['Tủ phân phối phụ', 'Đến 630 A', 'IP43 / IP55'],
        filters: ['Tủ phân phối', 'Tủ mô-đun'],
        facts: [
          ['Dòng định mức nền tảng', 'Đến 630 A'],
          ['Cấp bảo vệ được công bố', 'Phiên bản IP43 hoặc IP55'],
          ['Tiêu chuẩn giải pháp', 'IEC 61439-2/-3 và IEC 62208 theo cấu hình'],
        ],
        note: 'Cần xác nhận cấu hình vỏ, thiết bị lắp trong, dòng thanh cái và hồ sơ kiểm chứng của đúng tủ trước khi đưa vào dự án.',
      },
      {
        brand: 'SIEMENS',
        maker: 'SIVACON',
        product: 'SIVACON S8',
        image: siemensSivaconImg,
        imageAlt: 'Hệ tủ hạ thế Siemens SIVACON S8',
        sourceHref: 'https://www.siemens.com/en-gb/products/sivacon/s8/',
        sourceLabel: 'Nền tảng SIVACON S8',
        families: ['Phân phối hạ thế', 'MCC', 'Kết cấu mô-đun'],
        filters: ['Tủ phân phối', 'MCC', 'Tủ mô-đun'],
        facts: [
          ['Dòng định mức nền tảng', 'Đến 7.000 A'],
          ['Thiết kế', 'Phân phối hạ thế và MCC dạng mô-đun'],
          ['Hồ sơ hãng nêu', 'Design-verified theo IEC 61439-1/-2'],
        ],
        note: 'Mức dòng, Icw và thử hồ quang chỉ áp dụng cấu hình tương ứng; cần đối chiếu tài liệu dự án và cấu trúc ngăn tủ cụ thể.',
      },
      {
        brand: 'SCHNEIDER ELECTRIC',
        maker: 'VarSet',
        product: 'VarSet Direct',
        image: schneiderVarSetImg,
        imageAlt: 'Tủ tụ bù cố định Schneider Electric VarSet Direct',
        sourceHref: 'https://www.se.com/vn/vi/product-range/1503-varset-direct/',
        sourceLabel: 'Dòng VarSet Direct',
        families: ['Tủ tụ bù cố định', '50 Hz', '230 V / 400–415 V'],
        filters: ['Tủ tụ bù'],
        facts: [
          ['Điện áp / tần số', '230 V hoặc 400/415 V; 50 Hz'],
          ['Công suất tại 230 V', '10 đến 60 kvar'],
          ['Công suất tại 400/415 V', '5 đến 150 kvar'],
        ],
        note: 'Dải kvar trên chỉ dành cho VarSet Direct. Tủ bù tự động, có cuộn kháng hoặc đóng cắt thyristor cần cấu hình riêng theo tải và sóng hài.',
      },
    ],
    specsTitle: 'Thông số phải chốt cho từng tủ',
    specsIntro: 'Không dùng dòng định mức của một nền tảng để mô tả mọi tủ. Sơ đồ, thiết bị lắp trong, thanh cái và kết cấu vỏ quyết định cấu hình thực tế.',
    specGroups: [
      ['Thông số hệ thống', ['Điện áp, tần số và sơ đồ nối đất', 'Dòng định mức và số cực', 'Icw / Icc tại thời gian quy định', 'Nguồn điều khiển và liên động', 'Dự phòng mở rộng']],
      ['Kết cấu tủ', ['Cấp IP và môi trường lắp', 'Form phân khoang', 'Kiểu vào / ra cáp hoặc busway', 'Vật liệu, kích thước và màu sơn', 'Thông gió và giới hạn nhiệt']],
      ['Riêng tủ tụ bù', ['Dung lượng kvar và số cấp', 'Bộ điều khiển hệ số công suất', 'Contactor hoặc thyristor', 'Cuộn kháng khi có sóng hài', 'Kết quả đo THD và đặc tính tải']],
      ['Hồ sơ cần nhận', ['Sơ đồ một sợi và bản vẽ GA', 'BOM thiết bị đúng mã', 'Hồ sơ kiểm chứng thiết kế', 'Quy trình / biên bản thử trong phạm vi', 'Điều kiện vận chuyển và bảo hành']],
    ],
    applicationsIntro: 'Tên ứng dụng chỉ xác định chức năng ban đầu; thiết kế tủ cuối cùng cần bám sơ đồ, dòng ngắn mạch, môi trường và chế độ vận hành.',
    applications: [
      [Factory, 'MSB nhà máy', 'Phân phối nguồn chính, liên động và dự phòng theo sơ đồ vận hành.'],
      [CircuitBoard, 'MCC dây chuyền', 'Cấp nguồn, bảo vệ và điều khiển động cơ theo từng xuất tuyến.'],
      [Building2, 'Tủ phân phối tòa nhà', 'MDB, DB và tủ kỹ thuật theo tải cùng không gian lắp đặt.'],
      [Zap, 'Tủ bù công suất', 'Cấu hình cố định hoặc tự động sau khi xem tải và mức sóng hài.'],
    ],
    guideTitle: 'Bốn bước trước khi yêu cầu báo giá',
    guideIntro: 'Sơ đồ và dữ liệu ngắn mạch rõ ràng giúp chốt kết cấu, thiết bị và hồ sơ tủ nhanh hơn.',
    steps: commonSteps,
    scopeTitle: 'Từ sơ đồ đến cấu hình tủ có thể kiểm tra',
    scopeIntro: 'Thiết kế, lắp ráp, thử nghiệm, giao hàng và lắp đặt chỉ được đưa vào phạm vi khi đã thống nhất trong hồ sơ báo giá.',
    scope: commonScope,
    requestTitle: 'Nhận cấu hình tủ theo sơ đồ công trình',
    requestIntro: 'Gửi sơ đồ một sợi, bảng tải hoặc yêu cầu chức năng. Kỹ sư sẽ rà phần thiết bị, thanh cái, vỏ tủ và hồ sơ còn thiếu.',
    requestPrep: ['Sơ đồ một sợi và danh sách tải', 'Điện áp, dòng định mức và Icw/Icc', 'Cấp IP, form tủ và nơi lắp', 'Yêu cầu ATS/MCC/APFC nếu có', 'Kết quả đo THD cho phương án tụ bù'],
    form: {
      needLabel: 'Tải / công suất tủ dự kiến',
      needPlaceholder: 'Ví dụ: MSB 1.600 A hoặc tủ bù 300 kvar',
      detailOneLabel: 'Dòng định mức / điện áp',
      detailOnePlaceholder: 'Ví dụ: 1.600 A, 400/415 V',
      detailTwoLabel: 'Icw / Icc dự kiến',
      detailTwoPlaceholder: 'Ví dụ: 50 kA/1 s hoặc chưa có',
      installationLabel: 'Môi trường lắp đặt',
      installationOptions: ['Chưa xác định', 'Trong phòng điện', 'Trong nhà xưởng', 'Ngoài trời', 'Môi trường đặc biệt'],
      attachmentNote: 'Sau khi email mở, có thể đính kèm sơ đồ một sợi, bảng tải, bản vẽ mặt bằng hoặc kết quả đo sóng hài trước khi bấm Gửi.',
    },
    related: [
      [ToggleRight, 'Thiết bị đóng cắt', 'Đối chiếu máy cắt, trip unit và phụ kiện trong tủ.', '/san-pham/thiet-bi-dong-cat'],
      [Cable, 'Dây cáp điện', 'Chốt đầu vào, đầu ra, tiết diện và không gian đấu cáp.', '/san-pham/day-cap-dien'],
      [UtilityPole, 'Máy biến áp', 'Phối hợp nguồn hạ thế, dòng định mức và bảo vệ.', '/san-pham/may-bien-ap'],
      [Factory, 'Điện công nghiệp', 'Trao đổi lắp đặt, kéo cáp và đấu nối hệ thống.', '/dich-vu/dien-cong-nghiep'],
    ],
    questions: [
      ['Tủ cùng dòng định mức có giống nhau không?', 'Không. Khả năng chịu ngắn mạch, form ngăn, cấp IP, thiết bị bên trong, kích thước và hồ sơ kiểm chứng có thể khác đáng kể.'],
      ['Có thể chọn dung lượng tụ bù chỉ theo công suất máy biến áp không?', 'Không nên. Cần dữ liệu hệ số công suất, biểu đồ tải và mức sóng hài; phương án cuộn kháng hoặc đóng cắt cũng phụ thuộc kết quả này.'],
      ['IEC 61439 áp cho tên vỏ tủ hay tủ hoàn chỉnh?', 'Việc đánh giá phải gắn với hệ tủ và cấu hình lắp ráp tương ứng. Không nên suy ra tủ hoàn chỉnh đạt yêu cầu chỉ từ một linh kiện hoặc tên nền tảng.'],
      ['Trang có chốt sẵn kích thước và tiến độ tủ không?', 'Không. Kích thước, BOM, thời gian sản xuất và giao hàng được xác nhận sau khi chốt sơ đồ cùng cấu hình.'],
    ],
  },

  solar: {
    slug: 'solar',
    pageName: 'Solar',
    eyebrow: 'DANH MỤC KỸ THUẬT • SOLAR',
    heroLead: 'Thiết bị Solar cho',
    heroHighlight: 'hệ thống doanh nghiệp',
    intro: 'Đối chiếu module quang điện và inverter theo đúng model, datasheet và điều kiện dự án. Công suất cực đại, hiệu suất và tính năng bảo vệ dưới đây không được dùng để hứa sản lượng hoặc khả năng tương thích cho một hệ thống chưa khảo sát.',
    heroServices: ['Đối chiếu module & inverter', 'Rà dữ liệu tải và mái', 'Kiểm tra đấu nối hệ thống'],
    quickFacts: [
      [SolarPanel, 'Nhóm thiết bị', 'Module & inverter'],
      [Factory, 'Ứng dụng', 'Mái nhà xưởng · C&I'],
      [Zap, 'Dữ liệu đầu vào', 'Tải · mái · điểm đấu nối'],
      [SearchCheck, 'Nguồn dữ liệu', '4 dòng đã đối chiếu'],
    ],
    catalogTitle: 'Chọn theo hãng và nhóm thiết bị',
    catalogIntro: 'Module và inverter là hai nhóm khác nhau. Mỗi thông số chỉ áp dụng đúng dòng hoặc model được liên kết, không đại diện cho toàn bộ hệ sinh thái hãng.',
    filterLabel: 'Nhóm thiết bị',
    filterOptions: ['Module PV', 'Inverter C&I', 'N-type', 'Hai mặt kính', 'Hệ phân tán'],
    products: [
      {
        brand: 'LONGi',
        maker: 'Hi-MO',
        product: 'Hi-MO X10',
        image: longiHiMoX10Img,
        imageAlt: 'Module quang điện LONGi Hi-MO X10',
        sourceHref: 'https://www.longi.com/vn/products/modules-series/hi-mo-x10/',
        sourceLabel: 'Dòng LONGi Hi-MO X10',
        families: ['Module PV', 'HPBC 2.0', 'PV phân tán'],
        filters: ['Module PV', 'Hệ phân tán'],
        facts: [
          ['Công nghệ cell', 'HPBC 2.0'],
          ['Mức tối đa hãng công bố', 'Đến 670 W'],
          ['Hiệu suất module tối đa', 'Đến 24,8%'],
        ],
        note: 'Công suất, hiệu suất, kích thước, suy giảm và bảo hành phải lấy từ datasheet đúng mã Hi-MO X10; mức tối đa không áp cho mọi biến thể.',
      },
      {
        brand: 'JINKOSOLAR',
        maker: 'Tiger Neo',
        product: 'Tiger Neo 3.0',
        image: jinkoTigerNeoImg,
        imageAlt: 'Module quang điện JinkoSolar Tiger Neo 3.0',
        sourceHref: 'https://www.jinkosolar.com/en/site/dwtigerneo',
        sourceLabel: 'Dòng Tiger Neo 3.0',
        families: ['Module PV', 'N-type TOPCon', 'Hai mặt kính'],
        filters: ['Module PV', 'N-type', 'Hai mặt kính'],
        facts: [
          ['Dòng được đối chiếu', '66 quarter-cell, hai mặt kính kép'],
          ['Dải công suất công bố', '650 đến 670 W'],
          ['Hiệu suất / hệ số nhiệt', 'Đến 24,8%; -0,26%/°C'],
        ],
        note: 'Các giá trị trên thuộc cấu hình được hãng công bố cho Tiger Neo 3.0; cần kiểm tra đúng datasheet và khả dụng tại thị trường Việt Nam.',
      },
      {
        brand: 'HUAWEI FUSIONSOLAR',
        maker: 'SUN2000',
        product: 'SUN2000-150K-MG0',
        image: huaweiSun2000Img,
        imageAlt: 'Inverter Huawei FusionSolar SUN2000-150K-MG0',
        sourceHref: 'https://solar.huawei.com/en/products/sun2000-150k-mg0/specs/',
        sourceLabel: 'Thông số SUN2000-150K-MG0',
        families: ['Inverter string', '150 kW', '7 MPPT'],
        filters: ['Inverter C&I', 'Hệ phân tán'],
        facts: [
          ['Công suất AC danh định', '150 kW'],
          ['Số MPPT', '7 MPPT'],
          ['Hiệu suất / bảo vệ', 'Tối đa 98,6% @400 V; IP66; SPD Type II AC/DC'],
        ],
        note: 'Hiệu suất 98,8% được hãng nêu ở cấu hình 480 V. Chuỗi pin, điện áp MPPT, giao tiếp và tương thích hệ thống phải được tính cho đúng dự án.',
      },
      {
        brand: 'SUNGROW',
        maker: 'String inverter',
        product: 'SG125CX-P2',
        image: sungrowSg125Img,
        imageAlt: 'Inverter string Sungrow SG125CX-P2',
        sourceHref: 'https://www.sungrowpower.com/en/products/string-inverter/sg125cx-p2?tab=2',
        sourceLabel: 'Thông số SG125CX-P2',
        families: ['Inverter string 3 pha', '125 kW', '12 MPPT'],
        filters: ['Inverter C&I', 'Hệ phân tán'],
        facts: [
          ['Công suất AC danh định', '125 kW'],
          ['Số MPPT / điện áp', '12 MPPT; hệ 400 V'],
          ['Hiệu suất / bảo vệ', 'Tối đa 98,5%; IP66/C5; SPD DC Type I+II và AC Type II'],
        ],
        note: 'Trang hãng ghi phạm vi SEA. Cần kiểm tra firmware, phụ kiện, điều kiện lưới, bảo hành và khả dụng của đúng model tại thời điểm báo giá.',
      },
    ],
    specsTitle: 'Thông số phải chốt cho từng model',
    specsIntro: 'Không lấy watt hoặc hiệu suất cực đại để suy ra sản lượng. Cấu hình hệ thống còn phụ thuộc mái, bức xạ, bóng che, chuỗi pin, tải và điểm đấu nối.',
    specGroups: [
      ['Module quang điện', ['Model, công suất và hiệu suất', 'Voc, Isc, Vmp và Imp', 'Hệ số nhiệt', 'Kích thước, tải cơ và đầu nối', 'Bảo hành / suy giảm đúng datasheet']],
      ['Inverter & bảo vệ', ['Công suất AC và điện áp lưới', 'Dải MPPT và số MPPT', 'Giới hạn chuỗi / dòng đầu vào', 'Hiệu suất, IP và làm mát', 'SPD, giao tiếp và chức năng lưới']],
      ['Dữ liệu dự án', ['Hóa đơn hoặc biểu đồ phụ tải', 'Diện tích, hướng và kết cấu mái', 'Bóng che và tuyến cáp', 'Điểm đấu nối và dung lượng trạm', 'Mục tiêu hòa lưới, bám tải hoặc lưu trữ']],
      ['Hồ sơ cần nhận', ['Datasheet đúng model', 'Sơ đồ chuỗi và sơ đồ một sợi', 'Bản vẽ bố trí module', 'Tính toán sản lượng với giả định rõ', 'Điều kiện bảo hành và cung ứng']],
    ],
    applicationsIntro: 'Nhóm nhu cầu chỉ giúp định hướng khảo sát; công suất và cấu hình cuối cùng phải dựa trên dữ liệu tải, mái và điều kiện đấu nối.',
    applications: [
      [Factory, 'Mái nhà xưởng', 'Khai thác diện tích mái sau khi kiểm tra kết cấu, tải và điểm đấu nối.'],
      [Building2, 'Thương mại & dịch vụ', 'Đối chiếu biểu đồ tiêu thụ ban ngày với diện tích lắp đặt khả dụng.'],
      [Zap, 'Hệ bám tải', 'Cần dữ liệu đo, giải pháp điều khiển và điều kiện vận hành cụ thể.'],
      [Package, 'Hệ có lưu trữ', 'Pin, PCS/inverter, EMS và phương án an toàn phải được kiểm tra đồng bộ.'],
    ],
    guideTitle: 'Bốn bước trước khi yêu cầu báo giá',
    guideIntro: 'Hóa đơn điện, dữ liệu tải và ảnh mái giúp lập phương án sơ bộ có cơ sở hơn.',
    steps: [
      [ClipboardList, 'Thu thập dữ liệu tải', 'Chuẩn bị hóa đơn, biểu đồ phụ tải và mục tiêu sử dụng điện của dự án.'],
      [SolarPanel, 'Khảo sát mái & bóng che', 'Xác nhận diện tích, hướng mái, kết cấu, vật cản và tuyến thi công.'],
      [Zap, 'Kiểm tra điểm đấu nối', 'Đối chiếu tủ điện, máy biến áp, sơ đồ và điều kiện lưới tại công trình.'],
      [SearchCheck, 'Chốt thiết bị & mô phỏng', 'Khớp module, inverter, chuỗi pin và giả định sản lượng trước khi báo giá.'],
    ],
    scopeTitle: 'Từ dữ liệu tải đến phương án Solar có cơ sở',
    scopeIntro: 'Khảo sát, thiết kế, cung cấp, thi công và vận hành thử được xác nhận theo phạm vi thực tế của từng dự án.',
    scope: commonScope,
    requestTitle: 'Nhận phương án thiết bị theo dữ liệu dự án',
    requestIntro: 'Gửi hóa đơn điện, diện tích mái hoặc mục tiêu công suất đang có. Kỹ sư sẽ xác định phần khảo sát và dữ liệu cần bổ sung.',
    requestPrep: ['Hóa đơn hoặc biểu đồ tải gần nhất', 'Diện tích và ảnh mái', 'Công suất máy biến áp / điểm đấu nối', 'Mục tiêu hòa lưới, bám tải hay lưu trữ', 'Thời điểm dự kiến triển khai'],
    form: {
      needLabel: 'Công suất hoặc mục tiêu dự kiến',
      needPlaceholder: 'Ví dụ: khoảng 500 kWp hoặc tối ưu điện ban ngày',
      detailOneLabel: 'Điện áp / điểm đấu nối',
      detailOnePlaceholder: 'Ví dụ: tủ 400 V, MBA 1.000 kVA',
      detailTwoLabel: 'Diện tích mái khả dụng',
      detailTwoPlaceholder: 'Ví dụ: khoảng 4.000 m²',
      installationLabel: 'Kiểu hệ thống quan tâm',
      installationOptions: ['Chưa xác định', 'Hòa lưới', 'Bám tải', 'Có lưu trữ', 'Mở rộng hệ hiện hữu'],
      attachmentNote: 'Sau khi email mở, có thể đính kèm hóa đơn điện, biểu đồ tải, ảnh mái, bản vẽ mặt bằng hoặc sơ đồ điện trước khi bấm Gửi.',
    },
    related: [
      [UtilityPole, 'Máy biến áp', 'Kiểm tra dung lượng nguồn và điểm đấu nối của hệ thống.', '/san-pham/may-bien-ap'],
      [CircuitBoard, 'Tủ điện', 'Bố trí bảo vệ, đo đếm và ngăn đấu nối Solar.', '/san-pham/tu-dien-tu-tu-bu'],
      [ToggleRight, 'Thiết bị đóng cắt', 'Chọn bảo vệ AC/DC theo điện áp và dòng ngắn mạch.', '/san-pham/thiet-bi-dong-cat'],
      [SolarPanel, 'Dịch vụ Solar', 'Trao đổi khảo sát, thiết kế và phạm vi thi công.', '/dich-vu/solar'],
    ],
    questions: [
      ['Có thể tính sản lượng chỉ từ công suất tấm pin không?', 'Không. Cần dữ liệu bức xạ, hướng và độ nghiêng, bóng che, nhiệt độ, tổn hao, giới hạn inverter và điều kiện vận hành.'],
      ['Watt tối đa của một dòng module có áp cho mọi mã không?', 'Không. Dải công suất, hiệu suất, kích thước và bảo hành phải lấy từ datasheet đúng mã được chào.'],
      ['Có thể ghép bất kỳ module với bất kỳ inverter không?', 'Không. Phải kiểm tra Voc khi nhiệt độ thấp, dòng chuỗi, dải MPPT, số chuỗi, đầu nối và các yêu cầu của nhà sản xuất.'],
      ['Trang có cam kết hoàn vốn hoặc sản lượng không?', 'Không. Các chỉ số kinh tế và năng lượng chỉ nên được đưa ra sau khi có dữ liệu dự án cùng giả định mô phỏng rõ ràng.'],
    ],
  },

  lightning: {
    slug: 'thiet-bi-chong-set',
    pageName: 'Thiết bị chống sét',
    eyebrow: 'DANH MỤC KỸ THUẬT • CHỐNG SÉT',
    heroLead: 'Thiết bị chống sét',
    heroHighlight: 'cho công trình',
    intro: 'Tách rõ chống sét trực tiếp, SPD nguồn, SPD tín hiệu và hệ tiếp địa. Một kim thu sét hoặc một SPD không tự bảo vệ toàn bộ công trình; giải pháp phải được phối hợp theo hệ thống điện, cấp bảo vệ và hiện trạng thực tế.',
    heroServices: ['Tách đúng lớp bảo vệ', 'Kiểm tra TT / TN / IT', 'Đối chiếu Type 1 / 2 / 3'],
    quickFacts: [
      [ShieldCheck, 'Lớp bảo vệ', 'Trực tiếp & lan truyền'],
      [Zap, 'SPD nguồn', 'Type 1 · Type 2 · Type 3'],
      [UtilityPole, 'Nền tảng', 'Tiếp địa & liên kết đẳng thế'],
      [SearchCheck, 'Nguồn dữ liệu', '4 dòng đã đối chiếu'],
    ],
    catalogTitle: 'Chọn theo lớp và loại bảo vệ',
    catalogIntro: 'Iimp, In, Imax, Uc và Up thuộc đúng sản phẩm cùng sơ đồ hệ thống. Không so sánh hoặc thay thế chỉ bằng một giá trị dòng xả.',
    filterLabel: 'Lớp bảo vệ',
    filterOptions: ['SPD Type 1+2+3', 'SPD Type 1+2', 'SPD Type 2', 'Chống sét trực tiếp'],
    products: [
      {
        brand: 'SCHNEIDER ELECTRIC',
        maker: 'Acti9',
        product: 'Acti9 iPRD',
        image: schneiderIprdImg,
        imageAlt: 'Thiết bị chống sét lan truyền Schneider Electric Acti9 iPRD',
        sourceHref: 'https://www.se.com/vn/vi/product-range/61707-acti-9-ipf-iprd/',
        sourceLabel: 'Dòng Acti9 iPRD',
        families: ['SPD Type 2', 'DIN rail', 'Hộp cắm rút'],
        filters: ['SPD Type 2'],
        facts: [
          ['Phân loại', 'SPD Type 2 dạng mô-đun'],
          ['Dải Imax của họ sản phẩm', '8 đến 65 kA'],
          ['Uc / hệ thống', '350 hoặc 460 VAC; TT, TN-S, TN-C hoặc IT tùy mã'],
        ],
        note: 'Dòng xả, số cực, Uc và sơ đồ nối đất phải khớp đúng mã iPRD; dải thông số không có nghĩa mọi thiết bị đều đạt 65 kA.',
      },
      {
        brand: 'DEHN',
        maker: 'DEHNventil M2',
        product: 'DV M2 TNC 255 FM',
        image: dehnVentilImg,
        imageAlt: 'Thiết bị chống sét lan truyền DEHNventil M2',
        sourceHref: 'https://www.dehn-international.com/store/p/en-DE/F31015/combined-arrester-type-1-2-3-dehnventil-m2-three-pole-f-tn-c-systems-w-remote-signalling-contact-?product=P9412710',
        sourceLabel: 'Model DEHNventil M2 956305',
        families: ['SPD Type 1+2+3', 'TN-C', 'Báo xa'],
        filters: ['SPD Type 1+2+3'],
        facts: [
          ['Model đối chiếu', 'DV M2 TNC 255 FM • 956305'],
          ['Hệ thống / Uc', 'TN-C 230/400 V; Uc 255 V'],
          ['Up / tổng Iimp', 'Up ≤ 1,5 kV; 75 kA (10/350 µs)'],
        ],
        note: 'Thông số trên chỉ dành cho model 956305. Nếu hệ thống là TT, TN-S hoặc có sơ đồ khác, cần chọn biến thể tương ứng.',
      },
      {
        brand: 'OBO BETTERMANN',
        maker: 'MCD',
        product: 'MCD 50-B 3+1',
        image: oboMcdImg,
        imageAlt: 'Thiết bị chống sét lan truyền OBO MCD 50-B 3+1',
        sourceHref: 'https://www.obo-bettermann.com/en-xi/products/combination-arrester-3-pole-npe-ip20-255-3-n-pe-5096879.html',
        sourceLabel: 'Model MCD 50-B 3+1',
        families: ['SPD Type 1+2', '3+N/PE', 'DIN rail'],
        filters: ['SPD Type 1+2'],
        facts: [
          ['Model / cấu hình', '5096879; 3+N/PE cho TT hoặc TN-S'],
          ['Tổng Iimp', '125 kA (10/350 µs)'],
          ['Mức bảo vệ điện áp', 'Up < 1,7 kV'],
        ],
        note: 'Cầu chì dự phòng, khả năng chịu ngắn mạch, chiều dài dây và phối hợp với SPD tầng sau phải được kiểm tra theo sơ đồ thực tế.',
      },
      {
        brand: 'LPI',
        maker: 'Stormaster',
        product: 'Stormaster ESE',
        image: lpiStormasterImg,
        imageAlt: 'Đầu thu sét trực tiếp LPI Stormaster ESE',
        sourceHref: 'https://www.lpi.com.au/products/direct-strike/',
        sourceLabel: 'Dòng Stormaster ESE',
        families: ['Chống sét trực tiếp', 'ESE 15 / 30 / 50 / 60'],
        filters: ['Chống sét trực tiếp'],
        facts: [
          ['Nhóm model', 'Stormaster ESE 15, 30, 50 và 60'],
          ['Tiêu chuẩn hãng nêu', 'Thiết kế / thử theo NF C 17-102:2011'],
          ['Thử bổ sung', 'IEC 62561-2 theo datasheet hãng'],
        ],
        note: 'Không dùng một bán kính bảo vệ chung. Model, chiều cao lắp, cấp bảo vệ và hình học công trình phải được tính theo hồ sơ thiết kế.',
      },
    ],
    specsTitle: 'Thông số phải chốt cho từng lớp bảo vệ',
    specsIntro: 'Chống sét trực tiếp, SPD và tiếp địa là các phần phối hợp. Không bỏ qua sơ đồ nối đất, đường đi dây hoặc vị trí lắp thiết bị.',
    specGroups: [
      ['Chống sét trực tiếp', ['Kích thước và chiều cao công trình', 'Cấp bảo vệ yêu cầu', 'Phương pháp / tiêu chuẩn thiết kế', 'Vị trí đầu thu và dây xuống', 'Khoảng cách an toàn và liên kết đẳng thế']],
      ['SPD nguồn', ['Type 1, 2 hoặc 3', 'Uc, Up, In, Imax và Iimp', 'TT, TN-S, TN-C hay IT', 'SCCR / cầu chì dự phòng', 'Số cực và tiếp điểm báo xa']],
      ['Tiếp địa & phối hợp', ['Điện trở đất mục tiêu theo hồ sơ', 'Bố trí cọc, dây và mối nối', 'Chiều dài dây nối SPD', 'Phối hợp giữa các tầng SPD', 'SPD tín hiệu / dữ liệu nếu cần']],
      ['Hồ sơ cần nhận', ['Mặt bằng, mặt đứng và sơ đồ điện', 'Tính toán vùng bảo vệ', 'Datasheet đúng model', 'Biên bản đo / thử trong phạm vi', 'Điều kiện kiểm tra và bảo trì']],
    ],
    applicationsIntro: 'Nhóm công trình giúp xác định phạm vi khảo sát; giải pháp cuối cùng phải dựa trên kết cấu, hệ điện, tiếp địa và mức rủi ro.',
    applications: [
      [Factory, 'Nhà máy & kho xưởng', 'Phối hợp bảo vệ trực tiếp, SPD nguồn, tín hiệu và hệ tiếp địa.'],
      [Building2, 'Tòa nhà & thương mại', 'Xem xét mái, khu kỹ thuật, tủ điện tổng và các đường dịch vụ đi vào.'],
      [SolarPanel, 'Hệ thống Solar', 'Bảo vệ phía DC, AC, khung module và tuyến tín hiệu theo cấu hình hệ thống.'],
      [CircuitBoard, 'Điều khiển & dữ liệu', 'SPD tín hiệu phải khớp giao thức, điện áp và băng thông của đường truyền.'],
    ],
    guideTitle: 'Bốn bước trước khi yêu cầu báo giá',
    guideIntro: 'Ảnh hiện trạng, mặt bằng và sơ đồ nối đất giúp xác định đúng lớp bảo vệ cần khảo sát.',
    steps: [
      [ClipboardList, 'Xác định phạm vi bảo vệ', 'Ghi rõ công trình, thiết bị quan trọng và các đường nguồn hoặc tín hiệu đi vào.'],
      [UtilityPole, 'Kiểm tra tiếp địa', 'Thu thập sơ đồ, vật liệu, kết quả đo và liên kết đẳng thế hiện có.'],
      [Zap, 'Chốt hệ thống điện', 'Xác nhận TT, TN hoặc IT, điện áp, dòng ngắn mạch và vị trí các tủ.'],
      [SearchCheck, 'Phối hợp các tầng', 'Đối chiếu đầu thu, dây xuống, SPD và khoảng cách lắp trước khi báo giá.'],
    ],
    scopeTitle: 'Từ khảo sát hiện trạng đến giải pháp nhiều lớp',
    scopeIntro: 'Thiết kế, cung cấp, thi công, đo kiểm và bảo trì được xác nhận theo phạm vi cùng tiêu chuẩn của từng công trình.',
    scope: commonScope,
    requestTitle: 'Nhận phương án chống sét theo hiện trạng',
    requestIntro: 'Gửi kích thước công trình, sơ đồ điện hoặc ảnh hệ thống hiện tại. Kỹ sư sẽ xác định phần cần khảo sát và dữ liệu còn thiếu.',
    requestPrep: ['Kích thước và chiều cao công trình', 'Mặt bằng mái / ảnh hiện trạng', 'Sơ đồ TT, TN hoặc IT', 'Kết quả đo tiếp địa nếu có', 'Thiết bị nguồn, tín hiệu cần bảo vệ'],
    form: {
      needLabel: 'Quy mô / khu vực cần bảo vệ',
      needPlaceholder: 'Ví dụ: nhà xưởng 80 × 40 m, cao 14 m',
      detailOneLabel: 'Hệ điện / tiếp địa hiện hữu',
      detailOnePlaceholder: 'Ví dụ: TN-S 400 V, điện trở đo gần nhất 3 Ω',
      detailTwoLabel: 'Cấp bảo vệ / hiện trạng',
      detailTwoPlaceholder: 'Ví dụ: đã có kim thu sét, cần bổ sung SPD',
      installationLabel: 'Nhóm giải pháp quan tâm',
      installationOptions: ['Chưa xác định', 'Chống sét trực tiếp', 'SPD nguồn', 'SPD tín hiệu', 'Tiếp địa', 'Giải pháp tổng thể'],
      attachmentNote: 'Sau khi email mở, có thể đính kèm mặt bằng, mặt đứng, sơ đồ điện, kết quả đo đất hoặc ảnh hệ thống hiện tại trước khi bấm Gửi.',
    },
    related: [
      [ToggleRight, 'Thiết bị đóng cắt', 'Phối hợp SPD với bảo vệ dự phòng và dòng ngắn mạch.', '/san-pham/thiet-bi-dong-cat'],
      [CircuitBoard, 'Tủ điện', 'Xác định vị trí, không gian và sơ đồ lắp SPD.', '/san-pham/tu-dien-tu-tu-bu'],
      [SolarPanel, 'Thiết bị Solar', 'Đối chiếu bảo vệ DC/AC và tiếp địa khung pin.', '/san-pham/solar'],
      [ShieldCheck, 'Dịch vụ chống sét', 'Trao đổi khảo sát, thiết kế, thi công và đo kiểm.', '/dich-vu/chong-set'],
    ],
    questions: [
      ['Một SPD có bảo vệ được toàn bộ công trình không?', 'Không nên hiểu như vậy. Cần phối hợp các tầng bảo vệ, vị trí lắp, chiều dài dây, bảo vệ dự phòng, tiếp địa và các đường tín hiệu.'],
      ['Type 1, Type 2 và Type 3 khác nhau ở đâu?', 'Chúng phục vụ các vị trí và mức xung khác nhau trong hệ thống. Việc chọn phải dựa trên đánh giá rủi ro, sơ đồ nguồn và phối hợp giữa các tầng.'],
      ['Có thể dùng chung một bán kính bảo vệ cho mọi kim ESE không?', 'Không. Bán kính phụ thuộc model, chiều cao hữu ích, cấp bảo vệ và phương pháp tính theo tiêu chuẩn của hồ sơ.'],
      ['Điện trở đất thấp là đủ để kết luận hệ chống sét an toàn chưa?', 'Chưa đủ. Còn cần kiểm tra bố trí điện cực, mối nối, dây xuống, liên kết đẳng thế, phối hợp SPD và tình trạng cơ khí của toàn hệ thống.'],
    ],
  },
}
