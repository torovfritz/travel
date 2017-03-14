---
imports:
    - serp.typography
---

# Цена

Автоматическое форматирование цен.

## Форматирование чисел

Знаки слева и справа от запятой разбиваются на группы по три символа вне зависимости от от их общего количества. В ценах разбиваются на группы даже четырехзначные числа _(ср. 2009 год),_ потому что так они корректно выравниваются в таблицах.

```bml
<example>
    <Serp-Text>
        <Price value="2009.95" />; <Price value="31337.95" />
    </Serp-Text>
</example>
```

Форматирование чисел должно учитывать локаль при расстановке пробелов и знаков препинания:

```bml
<example>
    <Serp-Text>
        <Price Locale="ru" decimal value="31337.95" />
    </Serp-Text>
    <Serp-Text>
        <Price Locale="en" decimal value="31337.00" />
    </Serp-Text>
    <Serp-Text>
        <Price Locale="tr" decimal value="31337.00" />
    </Serp-Text>
</example>
```

## Параметры

### value

Значение цены, если не установлен параметр `minValue` или `maxValue`.

```bml
<example>
    <Serp-Text>
        <Price decimal value="31337.95" />
    </Serp-Text>
</example>
```

### minValue

Значение «от».

```bml
<example>
    <Serp-Text>
        <Price decimal minValue="5000" />
    </Serp-Text>
</example>
```

### maxValue

Значение «до».

```bml
<example>
    <Serp-Text>
        <Price decimal maxValue="31337" />
    </Serp-Text>
</example>
```

Если установлены `minValue` и `maxValue`, цена показывается в виде диапазона:

```bml
<example>
    <Serp-Text>
        <Price decimal minValue="5000" maxValue="31337" />
    </Serp-Text>
</example>
```

### currency

Валюта. По умолчанию определяется локалью. Поддерживаются валюты `RUR`, `USD`, `EUR`, `TRY`.

```bml
<example>
    <Serp-Text>
        RUR: <Price value="9000" currency="RUR" />
    </Serp-Text>
    <Serp-Text>
        USD: <Price value="9000" currency="USD" />
    </Serp-Text>
    <Serp-Text>
        EUR: <Price value="9000" currency="EUR" />
    </Serp-Text>
    <Serp-Text>
        TRY: <Price value="9000" currency="TRY" />
    </Serp-Text>
</example>
```

Если ввести неподдерживаемое значение, оно отобразится вместо знака валюты.

```bml
<example>
    <Serp-Text>
        BTC: <Price value="9000" currency="BTC" />
    </Serp-Text>
    <Serp-Text>
        Руб.: <Price value="9000" currency="руб." />
    </Serp-Text>
</example>
```

### decimal

В значении `true` фиксирует два знака после запятой (копейки), даже если они равны 0. По умолчанию `false`.

```bml
<example>
    <Serp-Text>
        <Price value="9000.00" />
    </Serp-Text>
    <Serp-Text>
        <Price decimal value="9000" />
    </Serp-Text>
    <Serp-Text>
        <Price value="9000.34" />
    </Serp-Text>
</example>
```
