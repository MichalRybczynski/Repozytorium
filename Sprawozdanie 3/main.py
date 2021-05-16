from bs4 import BeautifulSoup
from requests import get

url= "https://www.olx.pl/nieruchomosci/mieszkania/sprzedaz/pomorskie/"

page = get(url)
bs = BeautifulSoup(page.content, 'html.parser')

for oferta in bs.find_all('div', class_='offer-wrapper'):
    footer = oferta.find('td', class_='bottom-cell')
    lokalizacja = footer.find('small', class_='breadcrumb').get_text().strip()
    tytul = oferta.find('strong').get_text().strip()
    cena = oferta.find('p',class_='price').get_text().strip()
    print(lokalizacja,tytul,cena)

