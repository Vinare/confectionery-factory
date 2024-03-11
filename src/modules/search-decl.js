import { declOfNum } from '../helpers/decl-of-num';

export const searchDecl = () => {
    const searchSection = document.querySelector('.search');
    
    if (searchSection) {
        const searchCards = searchSection.querySelectorAll('.product-card');
        const description = searchSection.querySelector('.search-description');
        const searchCount = Number(searchCards.length);

        const firstStr = declOfNum(searchCount, ['найдена', 'найдено', 'найдены']);
        const secondStr = declOfNum(searchCount, ['результат', 'результата', 'результатов']);
        
        description.textContent = `${firstStr} ${searchCount} ${secondStr}`
    }
}