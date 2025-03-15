export function Footer() {
  return (
    <div className="footerContentWrapper">
      <section id="footer" className="max-w-7xl mx-auto px-4">
        <div className="footerContent grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col">
            <ul className="space-y-2">
              <li className="title alpha text-lg font-bold text-primary">Informações</li>
              <li className="hover:text-primary cursor-pointer">Mapa do site</li>
              <li className="hover:text-primary cursor-pointer">Termos e condições</li>
              <li className="hover:text-primary cursor-pointer">Aviso de Privacidade</li>
            </ul>
          </div>
          <div className="col">
            <ul className="space-y-2">
              <li className="title alpha text-lg font-bold text-primary">Trabalhe conosco</li>
              <li className="hover:text-primary cursor-pointer">Parceiras(os) de Conteúdo</li>
              <li className="hover:text-primary cursor-pointer">Anuncie</li>
              <li className="hover:text-primary cursor-pointer">Webmasters</li>
            </ul>
          </div>
          <div className="col">
            <ul className="space-y-2">
              <li className="title alpha text-lg font-bold text-primary">Suporte técnico</li>
              <li className="hover:text-primary cursor-pointer">Remoção dos conteúdos</li>
              <li className="hover:text-primary cursor-pointer">Assistência técnica</li>
              <li className="hover:text-primary cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div className="col">
            <ul className="space-y-2">
              <li className="title alpha text-lg font-bold text-primary">Conheça Mais</li>
              <li className="hover:text-primary cursor-pointer">Blog do CondomHub</li>
              <li className="hover:text-primary cursor-pointer">Blog de opiniões</li>
              <li className="hover:text-primary cursor-pointer">Centro de Bem-Estar</li>
            </ul>
          </div>
        </div>
        <div className="languageWrapper mt-8 flex justify-end">
          <div className="languageSelected dropdownTrigger cursor-pointer">Português</div>
        </div>
      </section>
      <div className="logoFooterWrapper homePageFooter max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-gray-700">
        <span className="copyright">© CondomHub.com, 2025</span>
      </div>
    </div>
  )
}

