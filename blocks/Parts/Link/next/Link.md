---
imports:
    - Parts.Link
---

# Regular link
```bml
<Page>
    <Link href="http://kinopoisk.ru" External>Кинопоиск</Link>     
    <Link href="./price">Цены</Link>
</Page>

```

## Params
### href
Адрес ссылки
<Link href="http://kinopoisk.ru" External>Кинопоиск</Link>     

## Mods
### External
Используется для отображения внешних ссылок.
```bml
<Page>
    <Link href="http://kinopoisk.ru" External>Кинопоиск</Link>     
</Page>
```
Все внешние ссылки открываются в новом окне.

### Action
Управляет поведением ссылки

#### newPage
Открывает ссылку на новой странице
```bml
<Page>
    <Link href="http://kinopoisk.ru" Action="newPage">Кинопоиск</Link>     
</Page>
```

#### hover
Открывает ссылку при наведении на неё курсора
```bml
<Page>
    <Link href="http://kinopoisk.ru" Action="hover">Осторожно! Ссылка откроется при наведении</Link>     
</Page>
```
