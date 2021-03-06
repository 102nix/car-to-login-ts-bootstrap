import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.scss';


const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://avtoportal.ru/uploads/posts/2017-07/1501488191_0caa1c573b704f708263d6b162eec19b.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://static2.sakh.com/i/md/auto/sales/12/83/1283135/n1283135_20190314082622_88ed3d0a.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://auto-database.com/image/pictures-of-nissan-qashqai2-2013-122809.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s.auto.drom.ru/i24240/s/photos/36580/36579472/gen1200_469384372.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://s.auto.drom.ru/i24240/s/photos/36580/36579472/gen1200_469384372.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="row text-center mt-4">
        <div className="col-12">
          Nissan Qashqai 1.6 (J10)
        </div>
        <div className="col-12">
          В 2010 год проведен рестайлинг кроссовера.
        </div>
        <div className="col-12">
          Модел выпускалась до 2013 года.
        </div>
      </div>
      <div className="row block-info">
        <div className="col-12 col-sm-6">
          <div className="info-common">
            <h2 className="title-info">
              Общие
              </h2>
            <div className="info-common-text">
              <div className="row_info">
                <div className="name-key">
                  Тип кузова
                  </div>
                <div className="text">
                  Внедорожник
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Кол-во дверей
                  </div>
                <div className="text">
                  5
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Кол-во мест
                  </div>
                <div className="text">
                  5
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Класс автомобиля J(кроссовер)
                  </div>
                <div className="text">
                  5
                  </div>
              </div>
              <div className="name-key"></div>
            </div>
          </div>
          <div className="info-common">
            <h2 className="title-info">
              Двигатель внутреннего сгорания
              </h2>
            <div className="info-common-text">
              <div className="row_info">
                <div className="name-key">
                  Объем двигателя в куб.см
                  </div>
                <div className="text">
                  1600
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Расположение двигателя
                  </div>
                <div className="text">
                  Спереди, поперечно
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Расположение цилиндров
                  </div>
                <div className="text">
                  L4
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Клапанов на цилиндр
                  </div>
                <div className="text">
                  4
                  </div>
              </div>
              <div className="name-key"></div>
            </div>
          </div>
          <div className="info-common">
            <h2 className="title-info">
              Трансмиссия
              </h2>
            <div className="info-common-text">
              <div className="row_info">
                <div className="name-key">
                  Тип привода
                  </div>
                <div className="text">
                  передний
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Тип КПП
                  </div>
                <div className="text">
                  механика 5 ст.
                  </div>
              </div>
            </div>
          </div>
          <div className="info-common">
            <h2 className="title-info">
              Подвеска
              </h2>
            <div className="info-common-text">
              <div className="row_info">
                <div className="name-key">
                  Передняя
                  </div>
                <div className="text">
                  независимая
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Задняя
                  </div>
                <div className="text">
                  независимая
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="info-common">
            <h2 className="title-info">
              Тормазная система
              </h2>
            <div className="info-common-text">
              <div className="row_info">
                <div className="name-key">
                  Передние тормаза
                  </div>
                <div className="text">
                  дисковые
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Задние тормаза
                  </div>
                <div className="text">
                  дисковые
                  </div>
              </div>
            </div>
          </div>
          <div className="info-common">
            <h2 className="title-info">
              Эксплуатационные показатели
              </h2>
            <div className="info-common-text">
              <div className="row_info">
                <div className="name-key">
                  Разгон до 100 км/ч, с
                  </div>
                <div className="text">
                  12
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Максимальная скорость, км/ч
                  </div>
                <div className="text">
                  175
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Расход, л на 100 км (городской цикл)(механика)
                  </div>
                <div className="text">
                  8,4
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Расход, л на 100 км (загородный цикл)(механика)
                  </div>
                <div className="text">
                  5,7
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Расход, л на 100 км (смешанный цикл)(механика)
                  </div>
                <div className="text">
                  6,7
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Расход, л на 100 км (городской цикл)(автомат)
                  </div>
                <div className="text">
                  0,0
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Расход, л на 100 км (загородный цикл)(автомат)
                  </div>
                <div className="text">
                  0,0
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Расход, л на 100 км (смешанный цикл)(автомат)
                  </div>
                <div className="text">
                  0,0
                  </div>
              </div>
            </div>
          </div>
          <div className="info-common">
            <h2 className="title-info">
              Размеры
              </h2>
            <div className="info-common-text">
              <div className="row_info">
                <div className="name-key">
                  Длина, мм
                  </div>
                <div className="text">
                  4310
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Ширина, мм
                  </div>
                <div className="text">
                  1780
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Высота, мм
                  </div>
                <div className="text">
                  1610
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Колесная база, мм
                  </div>
                <div className="text">
                  2630
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Колея колес спереди, мм
                  </div>
                <div className="text">
                  1540
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Колея колес сзади, мм
                  </div>
                <div className="text">
                  1550
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Размер шин
                  </div>
                <div className="text">
                  215/65 R16
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Снаряженная масса, кг
                  </div>
                <div className="text">
                  1297
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Объем багажника, л
                  </div>
                <div className="text">
                  352/1513
                  </div>
              </div>
              <div className="row_info">
                <div className="name-key">
                  Объем топливного бака, л
                  </div>
                <div className="text">
                  65
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home