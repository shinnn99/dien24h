import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowRight,
  Check,
  ExternalLink,
  FileCheck2,
  PhoneCall,
  Send,
  SlidersHorizontal,
} from 'lucide-react'

import type { Navigate } from '../App'
import { Breadcrumb, Eyebrow, FaqBlock } from '../components/Blocks'
import { CustomSelect } from '../components/CustomSelect'
import { email, phoneDisplay, phoneHref } from '../data'
import {
  catalogCategoryConfigs,
  type CatalogCategoryConfig,
  type CatalogCategoryKey,
} from './catalogCategoryData'

const allOption = 'Tất cả'

function CatalogQuoteForm({ config }: { config: CatalogCategoryConfig }) {
  const [prepared, setPrepared] = useState(false)
  const formTitleId = `${config.slug}-form-title`

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (name: string) => String(data.get(name) || '').trim().replace(/[\r\n]+/g, ' ')
    const name = value('name')
    const subject = encodeURIComponent(`Yêu cầu báo giá ${config.pageName} - ${name}`)
    const body = encodeURIComponent([
      `YÊU CẦU TƯ VẤN ${config.pageName.toLocaleUpperCase('vi')}`,
      '',
      `Họ tên: ${name}`,
      `Số điện thoại: ${value('phone')}`,
      `Khu vực công trình: ${value('projectArea')}`,
      `${config.form.needLabel}: ${value('needSummary')}`,
      `Thời gian cần: ${value('neededTime')}`,
      `Thương hiệu mong muốn: ${value('preferredBrand') || 'Chưa xác định'}`,
      `${config.filterLabel}: ${value('productFamily') || 'Chưa xác định'}`,
      `${config.form.detailOneLabel}: ${value('detailOne') || 'Chưa cung cấp'}`,
      `${config.form.detailTwoLabel}: ${value('detailTwo') || 'Chưa cung cấp'}`,
      `${config.form.installationLabel}: ${value('installation') || 'Chưa xác định'}`,
      `Ghi chú: ${value('note') || 'Chưa cung cấp'}`,
      '',
      'Nếu có, vui lòng đính kèm hồ sơ kỹ thuật hoặc ảnh hiện trạng trước khi gửi email.',
    ].join('\n'))

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setPrepared(true)
  }

  const brandOptions = [
    { label: 'Chưa xác định', value: '' },
    ...Array.from(new Set(config.products.map(product => product.brand))),
  ]
  const familyOptions = [
    { label: 'Chưa xác định', value: '' },
    ...config.filterOptions,
  ]
  const installationOptions = [
    { label: config.form.installationOptions[0], value: '' },
    ...config.form.installationOptions.slice(1),
  ]

  return <form className="transformer-category-form" onSubmit={submit} aria-labelledby={formTitleId}>
    <div className="transformer-category-form-heading">
      <span><Send size={20} aria-hidden="true" /></span>
      <div>
        <small>PHIẾU NHẬN YÊU CẦU KỸ THUẬT</small>
        <h3 id={formTitleId}>Gửi yêu cầu cho kỹ sư</h3>
      </div>
    </div>
    <p className="transformer-category-required-note"><b>*</b> Trường bắt buộc</p>
    {prepared && <div className="transformer-category-form-status" role="status" aria-live="polite">Email đã được chuẩn bị. Hãy kiểm tra ứng dụng email và bấm Gửi; dữ liệu trong biểu mẫu vẫn được giữ lại.</div>}

    <div className="transformer-category-form-grid two">
      <label>Họ và tên *<input name="name" required autoComplete="name" maxLength={100} placeholder="Nguyễn Văn A" /></label>
      <label>Số điện thoại *<input name="phone" required type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder="090..." /></label>
    </div>
    <div className="transformer-category-form-grid two">
      <label>Khu vực công trình *<input name="projectArea" required maxLength={160} placeholder="Tỉnh/thành, quận/huyện" /></label>
      <label>{config.form.needLabel} *<input name="needSummary" required maxLength={160} placeholder={config.form.needPlaceholder} /></label>
    </div>
    <div className="transformer-category-form-grid two">
      <label>Thời gian cần thiết bị *<input name="neededTime" required maxLength={100} placeholder="Ví dụ: quý IV/2026" /></label>
      <CustomSelect label="Thương hiệu mong muốn" name="preferredBrand" defaultValue="" options={brandOptions} />
    </div>
    <div className="transformer-category-form-grid two">
      <CustomSelect label={config.filterLabel} name="productFamily" defaultValue="" options={familyOptions} />
      <CustomSelect label={config.form.installationLabel} name="installation" defaultValue="" options={installationOptions} />
    </div>
    <div className="transformer-category-form-grid two">
      <label>{config.form.detailOneLabel}<input name="detailOne" maxLength={140} placeholder={config.form.detailOnePlaceholder} /></label>
      <label>{config.form.detailTwoLabel}<input name="detailTwo" maxLength={140} placeholder={config.form.detailTwoPlaceholder} /></label>
    </div>
    <label>Ghi chú yêu cầu<textarea name="note" maxLength={900} placeholder="Thông tin kỹ thuật, hiện trạng hoặc yêu cầu cần kỹ sư lưu ý..." /></label>
    <div className="transformer-category-attachment-note"><FileCheck2 size={18} aria-hidden="true" /><span>{config.form.attachmentNote}</span></div>
    <button className="button primary" type="submit"><Send size={18} aria-hidden="true" />{prepared ? 'MỞ LẠI EMAIL' : 'GỬI YÊU CẦU CHO KỸ SƯ'}</button>
    <small>Nút này mở ứng dụng email trên thiết bị. Cần hỗ trợ ngay, gọi <a href={phoneHref}>{phoneDisplay}</a>.</small>
  </form>
}

export function CatalogCategoryPage({ category, navigate }: { category: CatalogCategoryKey; navigate: Navigate }) {
  const config = catalogCategoryConfigs[category]
  const [brandFilter, setBrandFilter] = useState(allOption)
  const [familyFilter, setFamilyFilter] = useState(allOption)
  const brands = Array.from(new Set(config.products.map(product => product.brand)))
  const visibleProducts = config.products.filter(product =>
    (brandFilter === allOption || product.brand === brandFilter)
    && (familyFilter === allOption || product.filters.includes(familyFilter)),
  )
  const requestId = `${config.slug}-request`
  const catalogId = `${config.slug}-brands`
  const mainProduct = config.products[0]

  return <main className={`transformer-category-page catalog-category-page catalog-category-page--${config.slug}`}>
    <section className="transformer-category-hero">
      <div className="container">
        <Breadcrumb navigate={navigate} items={[["Trang chủ", '/'], ['Sản phẩm', '/san-pham'], [config.pageName]]} />
        <div className="transformer-category-hero-grid">
          <div className="transformer-category-hero-copy">
            <Eyebrow>{config.eyebrow}</Eyebrow>
            <h1>
              <span className="hero-title-line hero-title-line--primary">{config.heroLead}</span>
              <span className="hero-title-line hero-title-line--highlight">{config.heroHighlight}</span>
            </h1>
            <p>{config.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href={`#${requestId}`}>Nhận tư vấn cấu hình</a>
              <a className="button outline" href={phoneHref}><PhoneCall size={18} aria-hidden="true" /> Gọi kỹ sư</a>
            </div>
            <div className="transformer-category-hero-services">
              {config.heroServices.map(item => <span key={item}><Check size={17} aria-hidden="true" />{item}</span>)}
            </div>
          </div>

          <div className="transformer-category-gallery" aria-label={`Ảnh ${config.pageName} từ các nhà sản xuất`}>
            <figure className="transformer-category-gallery-main">
              <img src={mainProduct.image} alt={mainProduct.imageAlt} />
              <figcaption><b>{mainProduct.brand}</b><span>{mainProduct.product}</span></figcaption>
            </figure>
            <div className="transformer-category-gallery-thumbs">
              {config.products.slice(1).map(product => <figure key={product.product}>
                <img src={product.image} alt={product.imageAlt} />
                <figcaption>{product.brand}</figcaption>
              </figure>)}
            </div>
            <small>Ảnh từ nguồn chính thức của nhà sản xuất; hình dáng và phụ kiện thực tế thay đổi theo model hoặc cấu hình.</small>
          </div>
        </div>
      </div>
    </section>

    <div className="container transformer-category-quick-facts">
      {config.quickFacts.map(([Icon, label, value]) => <div key={label}><span><Icon size={23} aria-hidden="true" /></span><small>{label}</small><b>{value}</b></div>)}
    </div>

    <section className="section container transformer-category-catalog" id={catalogId}>
      <div className="section-title row-title">
        <div><Eyebrow>DỮ LIỆU ĐÃ ĐỐI CHIẾU</Eyebrow><h2>{config.catalogTitle}</h2></div>
        <p>{config.catalogIntro}</p>
      </div>

      <div className="transformer-category-filter">
        <span className="transformer-category-filter-icon"><SlidersHorizontal size={22} aria-hidden="true" /></span>
        <CustomSelect label="Thương hiệu" value={brandFilter} onChange={setBrandFilter} options={[allOption, ...brands]} />
        <CustomSelect label={config.filterLabel} value={familyFilter} onChange={setFamilyFilter} options={[allOption, ...config.filterOptions]} />
        {(brandFilter !== allOption || familyFilter !== allOption) && <button className="button outline" type="button" onClick={() => { setBrandFilter(allOption); setFamilyFilter(allOption) }}>Xóa bộ lọc</button>}
        <small>{visibleProducts.length} dòng phù hợp • Thông số chỉ có hiệu lực trong phạm vi model hoặc tài liệu được dẫn nguồn.</small>
      </div>

      <div className="transformer-category-brand-grid">
        {visibleProducts.map(product => <article className="transformer-category-brand-card" key={product.product}>
          <figure><img src={product.image} alt={product.imageAlt} loading="lazy" /></figure>
          <div className="transformer-category-brand-body">
            <div className="transformer-category-brand-head"><span>{product.brand}</span><small>{product.maker}</small></div>
            <h3>{product.product}</h3>
            <div className="transformer-category-brand-tags">{product.families.map(item => <span key={item}>{item}</span>)}</div>
            <dl>{product.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            <p>{product.note}</p>
            <div className="transformer-category-brand-actions">
              <a href={`#${requestId}`}>Nhờ kỹ sư đối chiếu <ArrowRight size={16} aria-hidden="true" /></a>
              <a href={product.sourceHref} target="_blank" rel="noreferrer">{product.sourceLabel} <ExternalLink size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </article>)}
      </div>
      {!visibleProducts.length && <div className="transformer-category-empty">Chưa có dòng khớp hai tiêu chí này. Hãy đổi bộ lọc hoặc gửi yêu cầu để kỹ sư kiểm tra thêm.</div>}
    </section>

    <section className="section transformer-category-specs">
      <div className="container">
        <div className="section-title row-title">
          <div><Eyebrow>CHECKLIST HỒ SƠ</Eyebrow><h2>{config.specsTitle}</h2></div>
          <p>{config.specsIntro}</p>
        </div>
        <div className="transformer-category-spec-grid">
          {config.specGroups.map(([title, items]) => <article key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}><Check size={17} aria-hidden="true" />{item}</li>)}</ul></article>)}
        </div>
      </div>
    </section>

    <section className="section container transformer-category-applications">
      <div className="section-title center"><Eyebrow>ỨNG DỤNG</Eyebrow><h2>Nhóm nhu cầu thường gặp</h2><p>{config.applicationsIntro}</p></div>
      <div className="transformer-category-application-grid">
        {config.applications.map(([Icon, title, text]) => <article key={title}><span><Icon size={25} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section className="section transformer-category-guide">
      <div className="container">
        <div className="section-title center"><Eyebrow>HƯỚNG DẪN LỰA CHỌN</Eyebrow><h2>{config.guideTitle}</h2><p>{config.guideIntro}</p></div>
        <ol className="transformer-category-step-grid">
          {config.steps.map(([Icon, title, text], index) => <li key={title}><span className="transformer-category-step-number">0{index + 1}</span><span className="transformer-category-step-icon"><Icon size={24} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
      </div>
    </section>

    <section className="section container transformer-category-scope">
      <div className="transformer-category-scope-copy"><Eyebrow>PHẠM VI ĐIỆN 24H</Eyebrow><h2>{config.scopeTitle}</h2><p>{config.scopeIntro}</p><a className="button navy" href={`#${requestId}`}>Gửi thông tin công trình</a></div>
      <div className="transformer-category-scope-grid">{config.scope.map(item => <span key={item}><Check size={18} aria-hidden="true" />{item}</span>)}</div>
    </section>

    <section className="section transformer-category-request" id={requestId}>
      <div className="container">
        <div className="section-title row-title"><div><Eyebrow>YÊU CẦU KỸ THUẬT</Eyebrow><h2>{config.requestTitle}</h2></div><p>{config.requestIntro}</p></div>
        <div className="transformer-category-request-grid">
          <aside>
            <h3>Chuẩn bị nhanh trước khi gửi</h3>
            {config.requestPrep.map(item => <span key={item}><Check size={18} aria-hidden="true" />{item}</span>)}
            <div><PhoneCall size={23} aria-hidden="true" /><small>Hotline kỹ thuật</small><a href={phoneHref}>{phoneDisplay}</a></div>
          </aside>
          <CatalogQuoteForm config={config} />
        </div>
      </div>
    </section>

    <section className="section container transformer-category-related">
      <div className="section-title row-title"><div><Eyebrow>GIẢI PHÁP LIÊN QUAN</Eyebrow><h2>Thiết bị và dịch vụ đi cùng hệ thống</h2></div><button className="text-link" type="button" onClick={() => navigate('/san-pham')}>Xem danh mục <ArrowRight size={17} aria-hidden="true" /></button></div>
      <div className="transformer-category-related-grid">
        {config.related.map(([Icon, title, text, href]) => <button key={title} type="button" onClick={() => navigate(href)}><span><Icon size={23} aria-hidden="true" /></span><b>{title}</b><small>{text}</small><ArrowRight size={18} aria-hidden="true" /></button>)}
      </div>
    </section>

    <section className="section transformer-category-sources">
      <div className="container">
        <div className="section-title row-title"><div><Eyebrow>NGUỒN ĐỐI CHIẾU</Eyebrow><h2>Thông tin từ nhà sản xuất</h2></div><p>Cập nhật ngày 02/08/2026. Các đường dẫn dùng để kiểm tra lại phạm vi sản phẩm và thông số đã nêu trên trang.</p></div>
        <div className="transformer-category-source-grid">{config.products.map(product => <a key={product.product} href={product.sourceHref} target="_blank" rel="noreferrer"><span>{product.brand}</span><b>{product.sourceLabel}</b><ExternalLink size={18} aria-hidden="true" /></a>)}</div>
        <FaqBlock title={`Câu hỏi khi chọn ${config.pageName.toLocaleLowerCase('vi')}`} questions={config.questions} initialActive={null} />
      </div>
    </section>
  </main>
}
