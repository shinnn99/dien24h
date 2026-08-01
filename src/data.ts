import { CircuitBoard, Power, ShieldCheck, Siren, SolarPanel, UtilityPole, type LucideIcon } from 'lucide-react'

export const phoneDisplay = '0888.979.111'
export const phoneHref = 'tel:0888979111'
export const email = 'contact@dien24h.vn'
export const address = 'H4, Thân Nhân Trung, KP4C, Trảng Dài, Biên Hòa, Đồng Nai'
export const zaloHref = 'https://zalo.me/0888979111'

type ServiceSummary = {
  icon: LucideIcon
  title: string
  text: string
  href: string
}

export const services: ServiceSummary[] = [
  { icon: UtilityPole, title: 'Đường dây & trạm biến áp', text: 'Tư vấn thiết kế, thi công, lắp đặt, bảo trì và thí nghiệm đường dây trung thế, trạm biến áp.', href: '/dich-vu/tram-bien-ap' },
  { icon: Siren, title: 'Sửa chữa điện 24H', text: 'Xử lý chập điện, cháy điện, mất pha, cân pha, đảo pha cho nhà xưởng và điện dân dụng.', href: '/dich-vu/sua-chua-dien-24h' },
  { icon: CircuitBoard, title: 'Thiết bị điện 24H', text: 'Cung cấp tận nơi và lắp đặt trọn gói thiết bị chiếu sáng, đóng cắt, tủ điện điều khiển.', href: '/dich-vu/dien-cong-nghiep' },
  { icon: SolarPanel, title: 'Solar 24H', text: 'Tư vấn và thi công điện mặt trời hòa lưới, bám tải hoặc có lưu trữ cho doanh nghiệp.', href: '/dich-vu/solar' },
  { icon: ShieldCheck, title: 'Chống sét 24H', text: 'Thi công chống sét trực tiếp, chống sét lan truyền, tiếp địa và đo điện trở đất.', href: '/dich-vu/chong-set' },
  { icon: Power, title: 'Máy phát điện 24H', text: 'Cho thuê ngắn hoặc dài hạn, cung cấp máy mới hoặc đã qua sử dụng và bảo trì định kỳ.', href: '/dich-vu/may-phat-dien' },
]

export const faqs = [
  ['Điện 24H có tiếp nhận sự cố ngoài giờ không?', 'Có. Dịch vụ sửa chữa điện tiếp nhận sự cố 24 giờ mỗi ngày, phục vụ cả ngày lẫn đêm.'],
  ['Điện 24H hiện phục vụ khu vực nào?', 'Điện 24H tập trung phục vụ tại Biên Hòa – Đồng Nai. Khả năng hỗ trợ tại địa điểm cụ thể sẽ được xác nhận khi tiếp nhận yêu cầu.'],
  ['Làm thế nào để nhận báo giá thiết bị?', `Gọi ${phoneDisplay} hoặc gửi thông tin qua biểu mẫu. Giá bán và cấu hình chi tiết được tư vấn theo nhu cầu thực tế.`],
  ['Chính sách bảo hành được áp dụng thế nào?', 'Điện 24H có bảo hành tại chỗ và chính sách một đổi một tận nơi. Điều kiện, thời hạn và sản phẩm áp dụng sẽ được xác nhận khi tư vấn.'],
]
