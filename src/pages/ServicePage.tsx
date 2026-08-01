import type { ReactNode } from 'react'
import {
  Antenna,
  ArrowRight,
  BatteryCharging,
  BriefcaseBusiness,
  Building2,
  Cable,
  CalendarCheck2,
  CalendarClock,
  CircuitBoard,
  CircleCheck,
  ClipboardCheck,
  Cog,
  Construction,
  DraftingCompass,
  Earth,
  Factory,
  Flame,
  Gauge,
  Handshake,
  Lightbulb,
  Package,
  PackageCheck,
  PhoneCall,
  PlugZap,
  RefreshCw,
  RotateCcw,
  Scale,
  ShieldCheck,
  SolarPanel,
  Timer,
  ToggleRight,
  Truck,
  Unplug,
  UtilityPole,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Navigate } from '../App'
import { Eyebrow, FaqBlock, LinkButton, PageHero, QuoteForm } from '../components/Blocks'
import { phoneDisplay, phoneHref } from '../data'

type ServiceInfo = {
  eyebrow: string
  title: ReactNode
  text: string
  heroCallLabel: string
  stats: [string, string, string][]
  section: string
  scopeTitle: string
  items: [LucideIcon, string, string][]
  audienceTitle: string
  audienceText: string
  audienceLabels: [string, string, string, string]
  valueEyebrow: string
  valueTitle: string
  values: [string, string][]
  faqs: string[][]
  contactEyebrow: string
  contactText: string
  contactButton: string
  formTitle: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
}

const variants = {
  repair: {
    eyebrow: 'SỬA CHỮA ĐIỆN 24H',
    title: <>Tiếp nhận sự cố điện<br /><span>cả ngày lẫn đêm</span></>,
    text: 'Đội kỹ thuật phản ứng nhanh, tiếp nhận chập điện, cháy điện, mất pha, cân pha, đảo pha và các sự cố điện nhà xưởng, điện dân dụng.',
    heroCallLabel: 'Gọi hỗ trợ',
    stats: [
      ['24/7', 'Tiếp nhận sự cố', '24 giờ mỗi ngày'],
      ['Ngày & đêm', 'Túc trực hỗ trợ', 'Phục vụ cả ngày lẫn đêm'],
      ['Phản ứng nhanh', 'Đội kỹ thuật', 'Hướng đến giảm gián đoạn'],
      ['Biên Hòa', 'Khu vực trọng tâm', 'Đồng Nai'],
    ],
    section: 'SỰ CỐ ĐƯỢC TIẾP NHẬN',
    scopeTitle: 'Hỗ trợ điện nhà xưởng và dân dụng',
    items: [
      [Zap, 'Chập điện', 'Tiếp nhận tình trạng chập điện tại công trình.'],
      [Flame, 'Cháy điện', 'Hỗ trợ xử lý tình trạng cháy điện tại công trình.'],
      [Unplug, 'Mất pha', 'Tiếp nhận sự cố mất pha của hệ thống điện.'],
      [Scale, 'Cân pha', 'Hỗ trợ nhu cầu kiểm tra và cân pha.'],
      [RefreshCw, 'Đảo pha', 'Tiếp nhận tình trạng đảo pha cần xử lý.'],
      [Building2, 'Nhà xưởng & dân dụng', 'Phục vụ cả sự cố điện nhà xưởng và dân dụng.'],
    ],
    audienceTitle: 'Nhà xưởng và khách hàng dân dụng',
    audienceText: 'Phục vụ nhà xưởng, doanh nghiệp, hộ kinh doanh, chủ nhà và khách hàng dân dụng tại Biên Hòa – Đồng Nai.',
    audienceLabels: ['Nhà xưởng', 'Nhà ở', 'Biên Hòa', 'Đồng Nai'],
    valueEyebrow: 'CÁCH THỨC PHỤC VỤ',
    valueTitle: 'Luôn sẵn sàng khi có sự cố',
    values: [
      ['Tiếp nhận 24/7', 'Tiếp nhận sự cố 24 giờ mỗi ngày.'],
      ['Túc trực ngày và đêm', 'Đội kỹ thuật túc trực để tiếp nhận tình trạng sự cố.'],
      ['Phản ứng nhanh', 'Đội kỹ thuật phản ứng nhanh khi tiếp nhận sự cố.'],
      ['Giảm thời gian gián đoạn', 'Dịch vụ hướng tới hạn chế gián đoạn hoạt động sản xuất.'],
    ],
    faqs: [
      ['Điện 24H tiếp nhận sự cố vào thời gian nào?', 'Tiếp nhận sự cố 24 giờ mỗi ngày, cả ngày lẫn đêm.'],
      ['Những sự cố nào được tiếp nhận?', 'Điện 24H tiếp nhận chập điện, cháy điện, mất pha, cân pha, đảo pha cùng các sự cố điện nhà xưởng và dân dụng.'],
      ['Thời gian có mặt là bao lâu?', 'Thời gian có mặt được xác nhận qua hotline theo địa điểm và tình trạng sự cố.'],
    ],
    contactEyebrow: 'HỖ TRỢ SỰ CỐ 24/7',
    contactText: 'Tiếp nhận tình trạng cả ngày lẫn đêm',
    contactButton: 'Gọi đội kỹ thuật',
    formTitle: 'Gửi tình trạng sự cố',
    ctaTitle: 'Bạn đang gặp sự cố điện?',
    ctaText: 'Gọi hotline để đội kỹ thuật tiếp nhận tình trạng và trao đổi khả năng hỗ trợ.',
    ctaButton: 'Gửi yêu cầu hỗ trợ',
  },
  transformer: {
    eyebrow: 'ĐƯỜNG DÂY TRUNG THẾ & TRẠM BIẾN ÁP',
    title: <>Thi công đường dây<br />và <span>trạm biến áp</span></>,
    text: 'Tư vấn thiết kế, thi công, lắp đặt, bảo trì và thí nghiệm đường dây trung thế, trạm biến áp cho khu công nghiệp, nhà máy và hộ kinh doanh.',
    heroCallLabel: 'Gọi tư vấn',
    stats: [
      ['Trung thế', 'Đường dây', 'Thi công & thí nghiệm'],
      ['Trạm biến áp', 'Thi công & lắp đặt', 'Có dịch vụ bảo trì'],
      ['Tư vấn', 'Thiết kế', 'Theo nhu cầu công trình'],
      ['Đồng Nai', 'Khu vực trọng tâm', 'Biên Hòa'],
    ],
    section: 'PHẠM VI DỊCH VỤ',
    scopeTitle: 'Đường dây và trạm biến áp',
    items: [
      [DraftingCompass, 'Tư vấn thiết kế', 'Tư vấn và thiết kế giải pháp theo nhu cầu công trình.'],
      [UtilityPole, 'Đường dây trung thế', 'Thi công đường dây trung thế.'],
      [Construction, 'Thi công trạm biến áp', 'Triển khai hạng mục trạm biến áp.'],
      [PlugZap, 'Lắp đặt trạm biến áp', 'Lắp đặt trạm biến áp tại công trình.'],
      [Wrench, 'Bảo trì trạm biến áp', 'Cung cấp dịch vụ bảo trì trạm biến áp.'],
      [ClipboardCheck, 'Thí nghiệm điện', 'Thí nghiệm đường dây trung thế và trạm biến áp.'],
    ],
    audienceTitle: 'Khu công nghiệp, nhà máy và hộ kinh doanh',
    audienceText: 'Phục vụ khu công nghiệp, nhà máy và hộ kinh doanh có nhu cầu về đường dây và trạm biến áp tại Đồng Nai.',
    audienceLabels: ['Khu công nghiệp', 'Nhà máy', 'Hộ kinh doanh', 'Đồng Nai'],
    valueEyebrow: 'GIÁ TRỊ CAM KẾT',
    valueTitle: 'Ổn định, chất lượng và đúng tiến độ',
    values: [
      ['Nguồn điện ổn định', 'Giải pháp hướng tới khả năng cấp điện ổn định cho công trình.'],
      ['Tối ưu chi phí', 'Chi phí được cân nhắc theo nhu cầu triển khai.'],
      ['Bảo đảm chất lượng', 'Bảo đảm chất lượng trong quá trình thi công.'],
      ['Đúng tiến độ', 'Đóng điện đúng tiến độ với giá thành hợp lý.'],
    ],
    faqs: [
      ['Phạm vi dịch vụ trạm biến áp gồm những gì?', 'Gồm tư vấn thiết kế, thi công, lắp đặt, bảo trì và thí nghiệm đường dây trung thế, trạm biến áp.'],
      ['Điện 24H thi công được công suất bao nhiêu?', 'Dải công suất và cấu hình cần được xác nhận theo nhu cầu thực tế.'],
      ['Dịch vụ áp dụng cấp điện áp nào?', 'Điện 24H cung cấp dịch vụ đường dây trung thế; thông tin 22 kV thuộc danh mục sản phẩm máy biến áp.'],
    ],
    contactEyebrow: 'TƯ VẤN TRẠM BIẾN ÁP',
    contactText: 'Trao đổi nhu cầu đường dây và trạm biến áp',
    contactButton: 'Gọi tư vấn',
    formTitle: 'Yêu cầu tư vấn trạm',
    ctaTitle: 'Cần triển khai đường dây hoặc trạm biến áp?',
    ctaText: 'Gửi nhu cầu công trình để trao đổi phạm vi tư vấn, thiết kế, thi công hoặc bảo trì phù hợp.',
    ctaButton: 'Gửi nhu cầu công trình',
  },
  industrial: {
    eyebrow: 'THIẾT BỊ ĐIỆN 24H',
    title: <>Cung cấp và lắp đặt<br /><span>thiết bị điện</span></>,
    text: 'Cung cấp thiết bị đến công trình, lắp đặt trọn gói thiết bị chiếu sáng, thiết bị đóng cắt và tủ điện điều khiển.',
    heroCallLabel: 'Gọi tư vấn',
    stats: [
      ['Tận nơi', 'Cung cấp thiết bị', 'Giao đến công trình'],
      ['Trọn gói', 'Lắp đặt thiết bị', 'Theo nhu cầu khách hàng'],
      ['Tại chỗ', 'Bảo hành', 'Tại địa điểm khách hàng'],
      ['1 đổi 1', 'Bảo hành tận nơi', 'Xác nhận điều kiện áp dụng'],
    ],
    section: 'DỊCH VỤ THIẾT BỊ ĐIỆN',
    scopeTitle: 'Từ cung cấp đến lắp đặt tại công trình',
    items: [
      [Package, 'Cung cấp thiết bị', 'Cung cấp thiết bị điện theo nhu cầu công trình.'],
      [Truck, 'Giao đến công trình', 'Thiết bị được giao đến địa điểm của khách hàng.'],
      [Wrench, 'Lắp đặt trọn gói', 'Cung cấp dịch vụ lắp đặt thiết bị điện trọn gói.'],
      [Lightbulb, 'Thiết bị chiếu sáng', 'Lắp đặt thiết bị chiếu sáng.'],
      [ToggleRight, 'Thiết bị đóng cắt', 'Lắp đặt thiết bị đóng cắt.'],
      [CircuitBoard, 'Tủ điện điều khiển', 'Lắp đặt tủ điện điều khiển.'],
    ],
    audienceTitle: 'Khách hàng cần thiết bị và vật tư điện',
    audienceText: 'Dịch vụ phù hợp với chủ công trình, nhà máy, nhà xưởng và các đơn vị cần mua, giao hoặc lắp đặt thiết bị điện tại Đồng Nai.',
    audienceLabels: ['Công trình', 'Nhà máy', 'Nhà xưởng', 'Đồng Nai'],
    valueEyebrow: 'CHÍNH SÁCH HỖ TRỢ',
    valueTitle: 'Cung cấp và hỗ trợ tại nơi sử dụng',
    values: [
      ['Cung cấp tận nơi', 'Giao thiết bị đến công trình.'],
      ['Lắp đặt trọn gói', 'Có dịch vụ lắp đặt thiết bị điện tại công trình.'],
      ['Bảo hành tại chỗ', 'Hỗ trợ bảo hành tại địa điểm khách hàng.'],
      ['Đổi mới một đổi một', 'Điều kiện, thời hạn và sản phẩm áp dụng cần được xác nhận khi tư vấn.'],
    ],
    faqs: [
      ['Điện 24H cung cấp những dịch vụ thiết bị nào?', 'Cung cấp, giao đến công trình và lắp đặt trọn gói thiết bị chiếu sáng, thiết bị đóng cắt, tủ điện điều khiển.'],
      ['Có hỗ trợ bảo hành tại công trình không?', 'Có chính sách bảo hành tại chỗ và đổi mới một đổi một tận nơi; điều kiện áp dụng được xác nhận khi tư vấn.'],
      ['Thời hạn bảo hành là bao lâu?', 'Thời hạn, danh mục áp dụng và điều kiện bảo hành được xác nhận khi tư vấn.'],
    ],
    contactEyebrow: 'TƯ VẤN THIẾT BỊ',
    contactText: 'Trao đổi nhu cầu cung cấp và lắp đặt',
    contactButton: 'Gọi tư vấn',
    formTitle: 'Yêu cầu báo giá thiết bị',
    ctaTitle: 'Bạn cần thiết bị điện cho công trình?',
    ctaText: 'Gửi nhóm thiết bị và nhu cầu lắp đặt để Điện 24H trao đổi phương án cung cấp phù hợp.',
    ctaButton: 'Yêu cầu báo giá thiết bị',
  },
  maintenance: {
    eyebrow: 'BẢO TRÌ & THÍ NGHIỆM ĐIỆN',
    title: <>Bảo trì và thí nghiệm<br /><span>hệ thống điện</span></>,
    text: 'Dịch vụ gồm bảo trì trạm biến áp, thí nghiệm đường dây trung thế và trạm biến áp, bảo trì máy phát điện, đo kiểm điện trở đất.',
    heroCallLabel: 'Gọi tư vấn',
    stats: [
      ['Trạm biến áp', 'Bảo trì', 'Hạng mục dịch vụ'],
      ['Trung thế', 'Thí nghiệm đường dây', 'Cùng trạm biến áp'],
      ['Máy phát', 'Bảo trì định kỳ', 'Duy trì nguồn dự phòng'],
      ['Tiếp địa', 'Đo điện trở đất', 'Có đo kiểm định kỳ'],
    ],
    section: 'HẠNG MỤC DỊCH VỤ',
    scopeTitle: 'Bảo trì và đo kiểm theo hệ thống',
    items: [
      [Wrench, 'Bảo trì trạm biến áp', 'Dịch vụ bảo trì trạm biến áp.'],
      [Cable, 'Thí nghiệm đường dây', 'Thí nghiệm đường dây trung thế.'],
      [ClipboardCheck, 'Thí nghiệm trạm biến áp', 'Thí nghiệm các hạng mục trạm biến áp.'],
      [Cog, 'Bảo trì máy phát', 'Bảo trì máy phát điện định kỳ.'],
      [Gauge, 'Đo điện trở đất', 'Đo điện trở đất của hệ thống tiếp địa.'],
      [CalendarCheck2, 'Đo kiểm định kỳ', 'Đo kiểm điện trở đất định kỳ.'],
    ],
    audienceTitle: 'Hệ thống điện tại công trình',
    audienceText: 'Các hạng mục bảo trì và thí nghiệm phục vụ nhà máy, nhà xưởng, doanh nghiệp và công trình tại Đồng Nai.',
    audienceLabels: ['Nhà máy', 'Nhà xưởng', 'Công trình', 'Đồng Nai'],
    valueEyebrow: 'PHẠM VI NĂNG LỰC',
    valueTitle: 'Bảo trì, thí nghiệm và đo kiểm hệ thống điện',
    values: [
      ['Bảo trì hệ thống điện', 'Bảo trì hệ thống điện trong hệ sinh thái dịch vụ trọn gói.'],
      ['Thí nghiệm điện', 'Thí nghiệm đường dây trung thế và trạm biến áp.'],
      ['Bảo trì nguồn dự phòng', 'Máy phát điện có dịch vụ bảo trì định kỳ.'],
      ['Đo kiểm tiếp địa', 'Có dịch vụ đo và đo kiểm điện trở đất định kỳ.'],
    ],
    faqs: [
      ['Điện 24H nhận bảo trì những hạng mục nào?', 'Bảo trì trạm biến áp và bảo trì máy phát điện định kỳ.'],
      ['Có dịch vụ thí nghiệm và đo kiểm không?', 'Có. Điện 24H nhận thí nghiệm đường dây trung thế, trạm biến áp và đo kiểm điện trở đất.'],
      ['Chu kỳ bảo trì là bao lâu?', 'Tần suất bảo trì được xác nhận theo hạng mục và nhu cầu vận hành.'],
    ],
    contactEyebrow: 'TƯ VẤN BẢO TRÌ',
    contactText: 'Trao đổi hạng mục bảo trì và thí nghiệm',
    contactButton: 'Gọi tư vấn',
    formTitle: 'Yêu cầu tư vấn bảo trì',
    ctaTitle: 'Cần bảo trì hoặc thí nghiệm hệ thống điện?',
    ctaText: 'Gửi loại hệ thống và hạng mục cần kiểm tra để trao đổi phạm vi dịch vụ.',
    ctaButton: 'Gửi yêu cầu bảo trì',
  },
  solar: {
    eyebrow: 'SOLAR 24H',
    title: <>Giải pháp điện mặt trời<br /><span>cho doanh nghiệp</span></>,
    text: 'Tư vấn và thi công điện mặt trời hòa lưới, bám tải hoặc có lưu trữ cho doanh nghiệp và nhà xưởng.',
    heroCallLabel: 'Gọi tư vấn',
    stats: [
      ['Hòa lưới', 'Giải pháp solar', 'Theo nhu cầu sử dụng'],
      ['Bám tải', 'Giải pháp solar', 'Cho doanh nghiệp'],
      ['Có lưu trữ', 'Giải pháp solar', 'Cho doanh nghiệp & nhà xưởng'],
      ['Nhà xưởng', 'Nhóm khách hàng', 'Doanh nghiệp'],
    ],
    section: 'GIẢI PHÁP SOLAR',
    scopeTitle: 'Ba cấu hình cho doanh nghiệp và nhà xưởng',
    items: [
      [DraftingCompass, 'Tư vấn điện mặt trời', 'Tư vấn giải pháp điện năng lượng mặt trời.'],
      [SolarPanel, 'Điện mặt trời hòa lưới', 'Thi công hệ thống điện mặt trời hòa lưới.'],
      [Gauge, 'Điện mặt trời bám tải', 'Thi công hệ thống điện mặt trời bám tải.'],
      [BatteryCharging, 'Giải pháp có lưu trữ', 'Cung cấp giải pháp điện mặt trời có lưu trữ.'],
      [BriefcaseBusiness, 'Cho doanh nghiệp', 'Giải pháp hướng tới nhu cầu của doanh nghiệp.'],
      [Factory, 'Cho nhà xưởng', 'Giải pháp dành cho công trình nhà xưởng.'],
    ],
    audienceTitle: 'Doanh nghiệp và nhà xưởng',
    audienceText: 'Giải pháp đầu tư dài hạn cho doanh nghiệp và nhà xưởng muốn giảm chi phí điện năng và chi phí vận hành.',
    audienceLabels: ['Doanh nghiệp', 'Nhà xưởng', 'Biên Hòa', 'Đồng Nai'],
    valueEyebrow: 'LỢI ÍCH GIẢI PHÁP',
    valueTitle: 'Hướng tới hiệu quả vận hành dài hạn',
    values: [
      ['Giảm chi phí điện năng', 'Hướng tới giảm chi phí sử dụng điện.'],
      ['Giảm chi phí vận hành', 'Giải pháp hướng tới hiệu quả vận hành của doanh nghiệp.'],
      ['Hỗ trợ làm mát nhà xưởng', 'Hỗ trợ làm mát nhà xưởng.'],
      ['Hướng đến chứng chỉ xanh', 'Hỗ trợ doanh nghiệp hướng đến chứng chỉ xanh.'],
    ],
    faqs: [
      ['Điện 24H cung cấp những giải pháp solar nào?', 'Gồm hệ thống hòa lưới, bám tải và giải pháp có lưu trữ cho doanh nghiệp, nhà xưởng.'],
      ['Có thông tin về thương hiệu tấm pin và inverter không?', 'Chưa có thông tin cụ thể về nhãn hiệu tấm pin, inverter hoặc pin lưu trữ.'],
      ['Có thông tin thời gian hoàn vốn không?', 'Chưa có thông tin cụ thể về thời gian hoàn vốn hoặc chính sách bảo hành hệ thống.'],
    ],
    contactEyebrow: 'TƯ VẤN SOLAR',
    contactText: 'Trao đổi nhu cầu điện của doanh nghiệp',
    contactButton: 'Gọi tư vấn',
    formTitle: 'Yêu cầu tư vấn solar',
    ctaTitle: 'Bạn đang cân nhắc điện mặt trời?',
    ctaText: 'Gửi nhu cầu sử dụng điện để trao đổi giải pháp hòa lưới, bám tải hoặc có lưu trữ.',
    ctaButton: 'Gửi nhu cầu solar',
  },
  generator: {
    eyebrow: 'MÁY PHÁT ĐIỆN 24H',
    title: <>Máy phát điện công nghiệp<br /><span>cho thuê và cung cấp</span></>,
    text: 'Cho thuê máy phát điện công nghiệp ngắn hoặc dài hạn, cung cấp máy mới, máy đã qua sử dụng và bảo trì định kỳ.',
    heroCallLabel: 'Gọi tư vấn',
    stats: [
      ['Ngắn hạn', 'Cho thuê máy phát', 'Theo nhu cầu sử dụng'],
      ['Dài hạn', 'Cho thuê máy phát', 'Cho công trình & doanh nghiệp'],
      ['Mới & đã dùng', 'Cung cấp máy phát', 'Lựa chọn mua máy'],
      ['Định kỳ', 'Bảo trì máy phát', 'Hỗ trợ vận hành'],
    ],
    section: 'DỊCH VỤ MÁY PHÁT ĐIỆN',
    scopeTitle: 'Thuê, mua và bảo trì nguồn dự phòng',
    items: [
      [Handshake, 'Cho thuê công nghiệp', 'Cho thuê máy phát điện phục vụ nhu cầu công nghiệp.'],
      [Timer, 'Thuê ngắn hạn', 'Lựa chọn thuê máy phát trong thời gian ngắn.'],
      [CalendarClock, 'Thuê dài hạn', 'Lựa chọn thuê máy phát trong thời gian dài.'],
      [PackageCheck, 'Cung cấp máy mới', 'Cung cấp máy phát điện mới.'],
      [RotateCcw, 'Máy đã qua sử dụng', 'Cung cấp máy phát điện đã qua sử dụng.'],
      [Wrench, 'Bảo trì định kỳ', 'Bảo trì máy phát điện theo định kỳ.'],
    ],
    audienceTitle: 'Doanh nghiệp cần nguồn điện dự phòng',
    audienceText: 'Dịch vụ hướng tới doanh nghiệp, nhà máy và nhà xưởng cần duy trì nguồn điện liên tục cho hoạt động vận hành.',
    audienceLabels: ['Doanh nghiệp', 'Nhà máy', 'Nhà xưởng', 'Đồng Nai'],
    valueEyebrow: 'MỤC TIÊU SỬ DỤNG',
    valueTitle: 'Duy trì nguồn điện cho vận hành',
    values: [
      ['Nguồn điện dự phòng', 'Máy phát hỗ trợ bảo đảm nguồn điện khi cần.'],
      ['Duy trì điện liên tục', 'Dịch vụ hướng tới khả năng duy trì nguồn điện liên tục.'],
      ['Vận hành ổn định', 'Nguồn dự phòng hỗ trợ hoạt động vận hành ổn định.'],
      ['Linh hoạt hình thức', 'Có lựa chọn thuê ngắn hạn, dài hạn hoặc mua máy mới, máy đã qua sử dụng.'],
    ],
    faqs: [
      ['Có những hình thức sử dụng máy phát nào?', 'Có thể thuê ngắn hạn, thuê dài hạn, mua máy mới hoặc máy đã qua sử dụng.'],
      ['Dải công suất và thương hiệu máy là gì?', 'Dải công suất, thương hiệu, nhiên liệu và mức tiêu hao cần được xác nhận khi tư vấn.'],
      ['Giá thuê đã bao gồm vận chuyển và vận hành chưa?', 'Giá thuê, chi phí vận chuyển và phương án nhân sự vận hành cần được xác nhận khi tư vấn.'],
    ],
    contactEyebrow: 'TƯ VẤN MÁY PHÁT',
    contactText: 'Trao đổi nhu cầu thuê, mua hoặc bảo trì',
    contactButton: 'Gọi tư vấn',
    formTitle: 'Yêu cầu tư vấn máy phát',
    ctaTitle: 'Bạn cần nguồn điện dự phòng?',
    ctaText: 'Gửi nhu cầu thuê, mua hoặc bảo trì máy phát để trao đổi hình thức phù hợp.',
    ctaButton: 'Gửi nhu cầu máy phát',
  },
  lightning: {
    eyebrow: 'CHỐNG SÉT 24H',
    title: <>Chống sét và tiếp địa<br /><span>cho công trình</span></>,
    text: 'Thi công chống sét trực tiếp, chống sét lan truyền, hệ thống tiếp địa và đo kiểm điện trở đất.',
    heroCallLabel: 'Gọi tư vấn',
    stats: [
      ['Trực tiếp', 'Chống sét công trình', 'Có lắp đặt kim thu sét'],
      ['Lan truyền', 'Bảo vệ thiết bị', 'Thiết bị điện tử nhạy cảm'],
      ['Tiếp địa', 'Thi công hệ thống', 'Có đo điện trở đất'],
      ['Định kỳ', 'Đo kiểm điện trở', 'Theo nhu cầu công trình'],
    ],
    section: 'PHẠM VI CHỐNG SÉT',
    scopeTitle: 'Bảo vệ công trình và thiết bị',
    items: [
      [Zap, 'Chống sét trực tiếp', 'Thi công hệ thống chống sét trực tiếp.'],
      [ShieldCheck, 'Chống sét lan truyền', 'Thi công chống sét lan truyền cho hệ thống điện.'],
      [Earth, 'Hệ thống tiếp địa', 'Thi công hệ thống tiếp địa cho công trình.'],
      [Antenna, 'Lắp đặt kim thu sét', 'Lắp đặt kim thu sét theo nhu cầu công trình.'],
      [Gauge, 'Đo điện trở đất', 'Đo điện trở đất của hệ thống tiếp địa.'],
      [CalendarCheck2, 'Đo kiểm định kỳ', 'Đo kiểm điện trở đất định kỳ.'],
    ],
    audienceTitle: 'Nhà ở, nhà xưởng và thiết bị nhạy cảm',
    audienceText: 'Phục vụ nhu cầu bảo vệ nhà ở, nhà xưởng và thiết bị điện tử nhạy cảm.',
    audienceLabels: ['Nhà ở', 'Nhà xưởng', 'Thiết bị điện tử', 'Đồng Nai'],
    valueEyebrow: 'LỢI ÍCH GIẢI PHÁP',
    valueTitle: 'Hướng tới mức độ an toàn cao',
    values: [
      ['Bảo vệ công trình', 'Giải pháp hướng tới an toàn cho công trình trước ảnh hưởng của sét.'],
      ['Bảo vệ thiết bị', 'Chống sét lan truyền hỗ trợ bảo vệ thiết bị điện tử nhạy cảm.'],
      ['Kim thu sét hiện đại', 'Sử dụng kim thu sét hiện đại cho hệ thống.'],
      ['Đo kiểm điện trở đất', 'Có dịch vụ đo và đo kiểm điện trở đất định kỳ.'],
    ],
    faqs: [
      ['Phạm vi dịch vụ chống sét gồm những gì?', 'Gồm chống sét trực tiếp, chống sét lan truyền, tiếp địa, lắp đặt kim thu sét và đo điện trở đất.'],
      ['Tiêu chuẩn và mức điện trở đất mục tiêu là bao nhiêu?', 'Tiêu chuẩn áp dụng và mức điện trở đất mục tiêu cần được xác nhận theo công trình.'],
      ['Bao lâu cần đo kiểm định kỳ?', 'Chu kỳ đo kiểm điện trở đất cần được xác nhận theo công trình.'],
    ],
    contactEyebrow: 'TƯ VẤN CHỐNG SÉT',
    contactText: 'Trao đổi nhu cầu chống sét và tiếp địa',
    contactButton: 'Gọi tư vấn',
    formTitle: 'Yêu cầu tư vấn chống sét',
    ctaTitle: 'Cần bảo vệ công trình trước ảnh hưởng của sét?',
    ctaText: 'Gửi loại công trình và nhu cầu chống sét, tiếp địa hoặc đo điện trở đất.',
    ctaButton: 'Gửi yêu cầu chống sét',
  },
} satisfies Record<string, ServiceInfo>

export type ServiceVariant = keyof typeof variants

export function ServicePage({ navigate, variant }: { navigate: Navigate; variant: ServiceVariant }) {
  const info = variants[variant]

  return <>
    <PageHero navigate={navigate} eyebrow={info.eyebrow} title={info.title} text={info.text}>
      <div className="hero-actions">
        <LinkButton href={phoneHref} navigate={navigate}><PhoneCall size={18} aria-hidden="true" /> {info.heroCallLabel} {phoneDisplay}</LinkButton>
        <LinkButton href="/lien-he" navigate={navigate} className="button secondary">Gửi yêu cầu tư vấn <ArrowRight size={18} aria-hidden="true" /></LinkButton>
      </div>
    </PageHero>

    <div className="container service-commitments">
      {info.stats.map(([number, title, detail]) => <div key={`${number}-${title}`}><b>{number}</b><span><strong>{title}</strong><small>{detail}</small></span></div>)}
    </div>

    <section className="section container">
      <div className="section-title center"><Eyebrow>{info.section}</Eyebrow><h2>{info.scopeTitle}</h2></div>
      <div className="issue-grid">
        {info.items.map(([Icon, title, description]) => <article key={title}>
          <span className="issue-icon" aria-hidden="true"><Icon size={28} strokeWidth={1.75} /></span>
          <div className="issue-copy"><h3>{title}</h3><p>{description}</p></div>
        </article>)}
      </div>
    </section>

    <section className="section surface"><div className="container two-col evidence-grid">
      <article className="service-area">
        <Eyebrow>ĐỐI TƯỢNG PHỤC VỤ</Eyebrow>
        <h2>{info.audienceTitle}</h2>
        <div className="map-visual"><span className="map-visual-logo"><img src="/logo-dien24h.png" alt="Logo Điện 24H" /></span>{info.audienceLabels.map(label => <i key={label}>{label}</i>)}</div>
        <p>{info.audienceText}</p>
      </article>
      <article className="service-values">
        <Eyebrow>{info.valueEyebrow}</Eyebrow>
        <h2>{info.valueTitle}</h2>
        <div className="service-value-grid">
          {info.values.map(([title, description]) => <div className="service-value-card" key={title}><h3><CircleCheck size={20} aria-hidden="true" /><span>{title}</span></h3><p>{description}</p></div>)}
        </div>
      </article>
    </div></section>

    <section className="section container three-col-bottom">
      <FaqBlock questions={info.faqs} title="Câu hỏi về dịch vụ" alwaysOpen />
      <QuoteForm title={info.formTitle} compact />
    </section>

  </>
}
