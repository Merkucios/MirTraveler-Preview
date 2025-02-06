/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface TopicRead {
  /** ID */
  id?: number;
  /**
   * Название
   * @minLength 1
   */
  title: string;
}

export interface ArticleImageRead {
  /** ID */
  id?: number;
  /**
   * File
   * @format uri
   */
  file?: string;
}

export interface ArticleRead {
  /** ID */
  id?: number;
  topic?: TopicRead;
  images?: ArticleImageRead[];
  /**
   * Название статьи
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Текст статьи
   * @minLength 1
   */
  text: string;
  /** Статус статьи */
  is_published?: boolean;
  /**
   * Дата публикации статьи
   * @format date-time
   */
  published_date?: string | null;
}

export interface ArticleWrite {
  /** Topic */
  topic: number;
  /**
   * Название статьи
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Текст статьи
   * @minLength 1
   */
  text: string;
  /** Статус статьи */
  is_published?: boolean;
}

export interface ArticleImageWrite {
  /**
   * File
   * @format uri
   */
  file?: string;
}

export interface LoginEmployeeUserData {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Пароль
   * @minLength 1
   */
  password: string;
  /**
   * Access-токен
   * @minLength 1
   */
  access_token?: string;
  /**
   * Refresh-токен
   * @minLength 1
   */
  refresh_token?: string;
}

export interface UserRead {
  /** ID */
  id?: number;
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Имя
   * @maxLength 150
   */
  first_name?: string | null;
  /**
   * Отчество
   * @maxLength 150
   */
  middle_name?: string | null;
  /**
   * Фамилия
   * @maxLength 150
   */
  last_name?: string | null;
  /**
   * Телефон
   * @maxLength 128
   */
  phone?: string | null;
  /** Роль */
  role?: 'individual' | 'business' | 'owner' | 'deputy_owner' | 'admin' | 'moderator';
  /** Статус */
  status?: 'waiting_register_confirmation' | 'active' | 'blocked' | 'waiting_mail_confirmation';
}

export interface UserWrite {
  /** Роль */
  role?: 'individual' | 'business' | 'owner' | 'deputy_owner' | 'admin' | 'moderator';
  /** Статус */
  status?: 'waiting_register_confirmation' | 'active' | 'blocked' | 'waiting_mail_confirmation';
}

export interface UserNotification {
  /** ID */
  id?: number;
  /**
   * От кого
   * @minLength 1
   * @maxLength 255
   */
  sender: string;
  /**
   * Тема
   * @minLength 1
   * @maxLength 255
   */
  subject: string;
  /**
   * Содержание
   * @minLength 1
   */
  body: string;
  /**
   * Дата и время создания
   * @format date-time
   */
  created_at?: string;
  /** Статус */
  status?: 'new' | 'read' | 'deleted';
}

export interface BadWord {
  /** ID */
  id?: number;
  /**
   * Выражение
   * @minLength 1
   * @maxLength 100
   */
  title: string;
}

export interface ComfortItem {
  /** ID */
  id?: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}

export interface Currency {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Обозначение
   * @minLength 1
   * @maxLength 3
   */
  currency: string;
  /** Используется */
  is_active?: boolean;
}

export interface DressCodeType {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}

export interface ExcursionType {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}

export interface HousingType {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}

export interface RecreationType {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}

export interface TopicWrite {
  /**
   * Название
   * @minLength 1
   */
  title: string;
}

export interface TourType {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}

export interface TransportType {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}

export interface EmployeeUserRead {
  /** ID */
  id?: number;
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Имя
   * @maxLength 150
   */
  first_name?: string | null;
  /**
   * Отчество
   * @maxLength 150
   */
  middle_name?: string | null;
  /**
   * Фамилия
   * @maxLength 150
   */
  last_name?: string | null;
  /**
   * Телефон
   * @maxLength 128
   */
  phone?: string | null;
  /** Роль */
  role?: 'individual' | 'business' | 'owner' | 'deputy_owner' | 'admin' | 'moderator';
  /** Статус */
  status?: 'waiting_register_confirmation' | 'active' | 'blocked' | 'waiting_mail_confirmation';
}

export interface EmployeeUserCreate {
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Имя
   * @maxLength 150
   */
  first_name?: string | null;
  /**
   * Отчество
   * @maxLength 150
   */
  middle_name?: string | null;
  /**
   * Фамилия
   * @maxLength 150
   */
  last_name?: string | null;
  /**
   * Телефон
   * @minLength 1
   */
  phone: string;
  /** Роль */
  role?: 'individual' | 'business' | 'owner' | 'deputy_owner' | 'admin' | 'moderator';
  /**
   * Пароль
   * @minLength 1
   * @maxLength 128
   */
  password: string;
}

export interface ChangePasswordData {
  /** ID пользователя */
  user_id: number;
  /**
   * Пароль
   * @minLength 1
   */
  password: string;
  /**
   * Подтверждение пароля
   * @minLength 1
   */
  password_2: string;
}

export interface EmployeeUserUpdate {
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Имя
   * @maxLength 150
   */
  first_name?: string | null;
  /**
   * Отчество
   * @maxLength 150
   */
  middle_name?: string | null;
  /**
   * Фамилия
   * @maxLength 150
   */
  last_name?: string | null;
  /**
   * Телефон
   * @minLength 1
   */
  phone: string;
  /** Роль */
  role?: 'individual' | 'business' | 'owner' | 'deputy_owner' | 'admin' | 'moderator';
}

export interface FlatPageRead {
  /** ID */
  id?: number;
  /** Заголовок */
  title: 'privacy_policy' | 'site_rules' | 'public_offer' | 'cookie_policy' | 'user_agreement';
  /**
   * Текст
   * @minLength 1
   */
  text?: string | null;
}

export interface FlatPageWrite {
  /**
   * Текст
   * @minLength 1
   */
  text?: string | null;
}

export interface NewsImageRead {
  /** ID */
  id?: number;
  /**
   * Image
   * @format uri
   */
  image?: string;
}

export interface NewsRead {
  /** ID */
  id?: number;
  images?: NewsImageRead[];
  /**
   * Дата публикации
   * @format date-time
   */
  published_date?: string | null;
  /** Is published */
  is_published?: boolean;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Preview
   * @format uri
   */
  preview?: string | null;
  /**
   * Текст новости
   * @minLength 1
   */
  text: string;
  /**
   * Url
   * @format uri
   * @maxLength 200
   */
  url?: string | null;
  /** Notification status */
  notification_status?: 'not_send' | 'to_send' | 'is_send';
  /** Tags */
  tags?: string | null;
}

export interface NewsWrite {
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Текст новости
   * @minLength 1
   */
  text: string;
  /**
   * Preview
   * @format uri
   */
  preview?: string | null;
  /**
   * Url
   * @format uri
   * @maxLength 200
   */
  url?: string | null;
  /** Tags */
  tags?: string | null;
  /** Is published */
  is_published?: boolean;
  /** Is send */
  is_send: boolean;
}

export interface NewsImageWrite {
  /**
   * Image
   * @format uri
   */
  image?: string;
}

export interface SupportRequestList {
  /** ID */
  id?: number;
  /**
   * Email
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** Обработано */
  is_processed?: boolean;
  /**
   * Дата и время создания
   * @format date-time
   */
  created_at?: string;
}

export interface SupportUser {
  /** ID пользователя */
  id: number;
  /**
   * E-mail
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Роль
   * @minLength 1
   */
  role: string;
}

export interface SupportResponse {
  /**
   * Ответ
   * @minLength 1
   */
  text: string;
  /** Тип отправки */
  send_method?: 'direct' | 'email';
  /**
   * Дата и время создания
   * @format date-time
   */
  created_at?: string;
}

export interface SupportRequestDetail {
  /** ID */
  id?: number;
  user: SupportUser;
  /**
   * Email
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** Обработано */
  is_processed?: boolean;
  /**
   * Дата и время создания
   * @format date-time
   */
  created_at?: string;
  /**
   * Запрос
   * @minLength 1
   */
  text: string;
  response: SupportResponse;
}

export interface SupportResponseData {
  /**
   * Ответ поддержки
   * @minLength 1
   */
  text: string;
  /**
   * Тип отправки
   * @minLength 1
   */
  send_method: string;
}

export interface UserConfiguration {
  /** ID */
  id?: number;
  /**
   * Количество попыток входа
   * @min 0
   * @max 32767
   */
  login_attempts?: number;
  /**
   * Количество минут блокировки пользователя при неправильном пароле, минут
   * @min 0
   * @max 32767
   */
  login_attempts_timeout?: number;
}

export interface UserModerationRequestList {
  /** ID */
  id?: number;
  /** Пользователь */
  user?: string;
  /** Сотрудник */
  employee?: string;
  /**
   * Дата создания
   * @format date-time
   */
  created_at?: string;
  /**
   * Дата обновления
   * @format date-time
   */
  updated_at?: string;
  /** Активна */
  is_active?: boolean;
  /** Подтверждена */
  is_approved?: boolean;
}

export interface ActiveEmployee {
  /** ID сотрудника */
  id: number;
  /**
   * Email
   * @minLength 1
   */
  email: string;
}

export interface PhysicalAddressRead {
  /** ID */
  id?: number;
  /**
   * Индекс
   * @maxLength 10
   */
  zip_code?: string | null;
  /**
   * Страна
   * @maxLength 100
   */
  country?: string | null;
  /**
   * Регион
   * @maxLength 255
   */
  region?: string | null;
  /**
   * Населенный пункт
   * @maxLength 255
   */
  city?: string | null;
  /**
   * Улица
   * @maxLength 255
   */
  street?: string | null;
  /**
   * Дом
   * @maxLength 255
   */
  building?: string | null;
  /**
   * Квартира
   * @maxLength 255
   */
  apartment?: string | null;
  /**
   * Корпус
   * @maxLength 255
   */
  corpus?: string | null;
  /**
   * Офис
   * @maxLength 255
   */
  office?: string | null;
  /** Пользователь */
  user: number;
}

export interface LegalAddressRead {
  /** ID */
  id?: number;
  /**
   * Индекс
   * @maxLength 10
   */
  zip_code?: string | null;
  /**
   * Страна
   * @maxLength 100
   */
  country?: string | null;
  /**
   * Регион
   * @maxLength 255
   */
  region?: string | null;
  /**
   * Населенный пункт
   * @maxLength 255
   */
  city?: string | null;
  /**
   * Улица
   * @maxLength 255
   */
  street?: string | null;
  /**
   * Дом
   * @maxLength 255
   */
  building?: string | null;
  /**
   * Квартира
   * @maxLength 255
   */
  apartment?: string | null;
  /**
   * Корпус
   * @maxLength 255
   */
  corpus?: string | null;
  /**
   * Офис
   * @maxLength 255
   */
  office?: string | null;
  /** Пользователь */
  user: number;
}

export interface BusinessInfoRead {
  /** ID */
  id?: number;
  /** Форма юридического лица */
  organization_type: 'ip' | 'ooo' | 'ao' | 'zao' | 'ano' | 'sonko' | 'ndp';
  /**
   * Полное юридическое наименование
   * @maxLength 255
   */
  full_legal_name?: string | null;
  /**
   * ФИО руководителя
   * @maxLength 255
   */
  manager_full_name?: string | null;
  /** Должность руководителя */
  manager_post?:
    | 'general_manager'
    | 'director'
    | 'president'
    | 'chairman'
    | 'individual_entrepreneur'
    | 'superintendent'
    | null;
  /**
   * ИНН
   * @maxLength 12
   */
  inn?: string | null;
  /**
   * КПП
   * @maxLength 9
   */
  kpp?: string | null;
  /**
   * Расчетный счет
   * @min -2147483648
   * @max 2147483647
   */
  current_account?: number | null;
  /**
   * Корреспондентский счет
   * @min -2147483648
   * @max 2147483647
   */
  correspondent_account?: number | null;
  /**
   * БИК
   * @maxLength 11
   */
  bic?: string | null;
  /**
   * ОГРН
   * @maxLength 13
   */
  ogrn?: string | null;
  /**
   * ОГРНИП
   * @maxLength 15
   */
  ogrnip?: string | null;
  /**
   * Город/Населенный пункт
   * @maxLength 255
   */
  city?: string | null;
  /**
   * Имя контактного лица
   * @maxLength 150
   */
  contact_person_name?: string | null;
  /**
   * Фамилия контактного лица
   * @maxLength 150
   */
  contact_person_surname?: string | null;
  /**
   * Отчество контактного лица
   * @maxLength 150
   */
  contact_person_middle_name?: string | null;
  /**
   * Номер телефона
   * @maxLength 128
   */
  phone?: string | null;
  /**
   * Email
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** Пользователь */
  user: number;
}

export interface BusinessUserFileRead {
  /** ID */
  id?: number;
  /**
   * Документ
   * @format uri
   */
  file?: string;
}

export interface ModerationUser {
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Фамилия
   * @maxLength 150
   */
  last_name?: string | null;
  /**
   * Имя
   * @maxLength 150
   */
  first_name?: string | null;
  /**
   * Телефон
   * @maxLength 128
   */
  phone?: string | null;
  /**
   * Отчество
   * @maxLength 150
   */
  middle_name?: string | null;
  physical_address: PhysicalAddressRead;
  legal_address: LegalAddressRead;
  business_info: BusinessInfoRead;
  files: BusinessUserFileRead[];
}

export interface LogUserModerationRequest {
  /** Сотрудник */
  employee?: string;
  /**
   * Дата создания
   * @format date-time
   */
  created_at?: string;
  /** Статус */
  status?: 'approved' | 'rejected';
  /** Комментарий */
  comment?: string | null;
}

export interface UserModerationRequestRead {
  /** ID */
  id?: number;
  /**
   * Дата создания
   * @format date-time
   */
  created_at?: string;
  /** Активна */
  is_active?: boolean;
  /** Подтверждена */
  is_approved?: boolean;
  user?: ModerationUser;
  logs?: LogUserModerationRequest[];
}

export interface ChangeEmployeeUserRequestData {
  /** ID сотрудника */
  employee_id: number;
}

export interface RejectUserRequestData {
  /**
   * Причина отклонения
   * @minLength 1
   */
  comment: string;
}

export interface BusinessAdList {
  /** Id */
  id?: number;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
  /**
   * Paid status
   * @minLength 1
   */
  paid_status?: string;
}

export interface ContactWrite {
  /** ID */
  id?: number;
  /**
   * Телефон
   * @minLength 1
   */
  phone: string;
  /**
   * Фамилия
   * @minLength 1
   * @maxLength 255
   */
  last_name: string;
  /**
   * Имя
   * @minLength 1
   * @maxLength 255
   */
  first_name: string;
  /**
   * Отчество
   * @maxLength 255
   */
  middle_name?: string | null;
  /**
   * Дополнительный телефон
   * @maxLength 128
   */
  additional_phone?: string | null;
  /**
   * Ссылка на WhatsApp
   * @format uri
   * @maxLength 200
   */
  whatsapp_link?: string | null;
  /**
   * Ссылка на Telegram
   * @format uri
   * @maxLength 200
   */
  telegram_link?: string | null;
  /**
   * Ссылка на сайт арендодателя
   * @format uri
   * @maxLength 200
   */
  website_link?: string | null;
}

export interface ExcursionAdWrite {
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  /** Currency */
  currency: number;
  /**
   * Is draft
   * @default false
   */
  is_draft?: boolean;
  /** Excursion type */
  excursion_type: number;
  /** С гидом */
  with_guide?: boolean;
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за экскурсию
   * @min 0
   * @max 2147483647
   */
  price_per_excursion?: number | null;
  /** Dress code */
  dress_code: number;
  contacts?: ContactWrite;
}

export interface ExcursionAdPhoto {
  /** ID */
  id?: number;
  /**
   * Изображение
   * @format uri
   */
  photo?: string;
}

export interface CurrencySite {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   */
  title?: string;
  /**
   * Обозначение
   * @minLength 1
   * @maxLength 3
   */
  currency?: string;
}

export interface ContactRead {
  /** ID */
  id?: number;
  /**
   * Фамилия
   * @minLength 1
   * @maxLength 255
   */
  last_name: string;
  /**
   * Имя
   * @minLength 1
   * @maxLength 255
   */
  first_name: string;
  /**
   * Отчество
   * @maxLength 255
   */
  middle_name?: string | null;
  /**
   * Телефон
   * @minLength 1
   * @maxLength 128
   */
  phone: string;
  /**
   * Дополнительный телефон
   * @maxLength 128
   */
  additional_phone?: string | null;
  /**
   * Ссылка на WhatsApp
   * @format uri
   * @maxLength 200
   */
  whatsapp_link?: string | null;
  /**
   * Ссылка на Telegram
   * @format uri
   * @maxLength 200
   */
  telegram_link?: string | null;
  /**
   * Ссылка на сайт арендодателя
   * @format uri
   * @maxLength 200
   */
  website_link?: string | null;
  /**
   * Количество просмотров
   * @min 0
   * @max 2147483647
   */
  view_count?: number;
}

export interface FeedbackPhoto {
  /** ID */
  id?: number;
  /**
   * Изображение
   * @format uri
   */
  photo?: string;
}

export type RecursiveField = object;

export interface FeedbackRead {
  /** ID */
  id?: number;
  /** User */
  user?: string;
  /** Текст */
  text?: string | null;
  /**
   * Оценка
   * @min 0
   * @max 2147483647
   */
  rating: number;
  photos?: FeedbackPhoto[];
  replies?: RecursiveField[];
}

export interface DictionarySite {
  /** ID */
  id?: number;
  /**
   * Наименование
   * @minLength 1
   */
  title?: string;
}

export interface ExcursionAdRead {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  /**
   * Дата создания
   * @format date-time
   */
  created_at?: string;
  /**
   * Дата обновления
   * @format date-time
   */
  updated_at?: string;
  /**
   * Дата истечения срока
   * @format date-time
   */
  expiration_date?: string | null;
  /** Избранное */
  is_favorite?: boolean;
  /** Статус */
  status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
  /** Статус оплаты */
  paid_status?: 'waiting' | 'success' | 'failed' | null;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  /** Favorite count */
  favorite_count?: string;
  photos?: ExcursionAdPhoto[];
  /** Category type */
  category_type?: string;
  excursion_type: DictionarySite;
  /** С гидом */
  with_guide?: boolean;
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за экскурсию
   * @min 0
   * @max 2147483647
   */
  price_per_excursion?: number | null;
  dress_code: DictionarySite;
  /** Views */
  views?: string;
}

export interface RentHousingAdWrite {
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  /** Currency */
  currency: number;
  /**
   * Is draft
   * @default false
   */
  is_draft?: boolean;
  /** Housing type */
  housing_type: number;
  /**
   * Количество комнат
   * @min 0
   * @max 2147483647
   */
  room_count?: number | null;
  /** Студия */
  is_studio?: boolean;
  /** Площадь, кв.м. */
  area?: number | null;
  /**
   * Максимальное количество гостей
   * @min 0
   * @max 2147483647
   */
  guests?: number | null;
  /** Можно с детьми */
  is_children_allowed?: boolean;
  /** Можно с животными */
  is_pets_allowed?: boolean;
  /**
   * Количество спальных мест
   * @min 0
   * @max 2147483647
   */
  sleep_place_count?: number | null;
  /** Время заезда */
  check_in_time?: string | null;
  /** Время выезда */
  check_out_time?: string | null;
  /** @uniqueItems true */
  comfort_items?: number[];
  /** Тип аренды */
  rent_type?: 'hourly' | 'daily';
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
  contacts?: ContactWrite;
}

export interface RentHousingAdPhoto {
  /** ID */
  id?: number;
  /**
   * Изображение
   * @format uri
   */
  photo?: string;
}

export interface RentHousingAdRead {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  /**
   * Дата создания
   * @format date-time
   */
  created_at?: string;
  /**
   * Дата обновления
   * @format date-time
   */
  updated_at?: string;
  /**
   * Дата истечения срока
   * @format date-time
   */
  expiration_date?: string | null;
  /** Избранное */
  is_favorite?: boolean;
  /** Статус */
  status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
  /** Статус оплаты */
  paid_status?: 'waiting' | 'success' | 'failed' | null;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  comfort_items: DictionarySite[];
  /**
   * Максимальное количество гостей
   * @min 0
   * @max 2147483647
   */
  guests?: number | null;
  /** Можно с детьми */
  is_children_allowed?: boolean;
  /** Можно с животными */
  is_pets_allowed?: boolean;
  /**
   * Количество спальных мест
   * @min 0
   * @max 2147483647
   */
  sleep_place_count?: number | null;
  /** Время заезда */
  check_in_time?: string | null;
  /** Время выезда */
  check_out_time?: string | null;
  /** Favorite count */
  favorite_count?: string;
  photos?: RentHousingAdPhoto[];
  /** Category type */
  category_type?: string;
  housing_type: DictionarySite;
  /**
   * Количество комнат
   * @min 0
   * @max 2147483647
   */
  room_count?: number | null;
  /** Студия */
  is_studio?: boolean;
  /** Площадь, кв.м. */
  area?: number | null;
  /** Тип аренды */
  rent_type?: 'hourly' | 'daily';
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
  /** Views */
  views?: string;
}

export interface RecreationAdWrite {
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  /** Currency */
  currency: number;
  /**
   * Is draft
   * @default false
   */
  is_draft?: boolean;
  /** Recreation type */
  recreation_type: number;
  /**
   * Средний чек
   * @min 0
   * @max 2147483647
   */
  average_bill?: number | null;
  contacts?: ContactWrite;
}

export interface RecreationAdPhoto {
  /** ID */
  id?: number;
  /**
   * Изображение
   * @format uri
   */
  photo?: string;
}

export interface RecreationAdRead {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  /**
   * Дата создания
   * @format date-time
   */
  created_at?: string;
  /**
   * Дата обновления
   * @format date-time
   */
  updated_at?: string;
  /**
   * Дата истечения срока
   * @format date-time
   */
  expiration_date?: string | null;
  /** Избранное */
  is_favorite?: boolean;
  /** Статус */
  status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
  /** Статус оплаты */
  paid_status?: 'waiting' | 'success' | 'failed' | null;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  /** Favorite count */
  favorite_count?: string;
  photos?: RecreationAdPhoto[];
  /** Category type */
  category_type?: string;
  recreation_type: DictionarySite;
  /**
   * Средний чек
   * @min 0
   * @max 2147483647
   */
  average_bill?: number | null;
  /** Views */
  views?: string;
}

export interface TourAdWrite {
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  /** Currency */
  currency: number;
  /**
   * Is draft
   * @default false
   */
  is_draft?: boolean;
  /** Tour type */
  tour_type: number;
  /** С гидом */
  with_guide?: boolean;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
  /**
   * Цена за тур
   * @min 0
   * @max 2147483647
   */
  price_per_tour?: number | null;
  /** Горящий */
  is_last_minute_tour?: boolean;
  /** Dress code */
  dress_code: number;
  contacts?: ContactWrite;
}

export interface TourAdPhoto {
  /** ID */
  id?: number;
  /**
   * Изображение
   * @format uri
   */
  photo?: string;
}

export interface TourAdRead {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  /**
   * Дата создания
   * @format date-time
   */
  created_at?: string;
  /**
   * Дата обновления
   * @format date-time
   */
  updated_at?: string;
  /**
   * Дата истечения срока
   * @format date-time
   */
  expiration_date?: string | null;
  /** Избранное */
  is_favorite?: boolean;
  /** Статус */
  status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
  /** Статус оплаты */
  paid_status?: 'waiting' | 'success' | 'failed' | null;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  /** Favorite count */
  favorite_count?: string;
  photos?: TourAdPhoto[];
  /** Category type */
  category_type?: string;
  tour_type: DictionarySite;
  /** С гидом */
  with_guide?: boolean;
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за тур
   * @min 0
   * @max 2147483647
   */
  price_per_tour?: number | null;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
  dress_code: DictionarySite;
  /** Горящий */
  is_last_minute_tour?: boolean;
  /** Views */
  views?: string;
}

export interface RentTransportAdWrite {
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  /** Currency */
  currency: number;
  /**
   * Is draft
   * @default false
   */
  is_draft?: boolean;
  /** Transport type */
  transport_type: number;
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
  contacts?: ContactWrite;
}

export interface RentTransportAdPhoto {
  /** ID */
  id?: number;
  /**
   * Изображение
   * @format uri
   */
  photo?: string;
}

export interface RentTransportAdRead {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  /**
   * Дата создания
   * @format date-time
   */
  created_at?: string;
  /**
   * Дата обновления
   * @format date-time
   */
  updated_at?: string;
  /**
   * Дата истечения срока
   * @format date-time
   */
  expiration_date?: string | null;
  /** Избранное */
  is_favorite?: boolean;
  /** Статус */
  status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
  /** Статус оплаты */
  paid_status?: 'waiting' | 'success' | 'failed' | null;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  /** Favorite count */
  favorite_count?: string;
  photos?: RentTransportAdPhoto[];
  /** Category type */
  category_type?: string;
  transport_type: DictionarySite;
  /** Тип аренды */
  rent_type?: 'hourly' | 'daily';
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
  /** Views */
  views?: string;
}

export interface ExcursionAdBookingWrite {
  /** Ad id */
  ad_id: number;
  /**
   * Booking start datetime
   * @format date-time
   */
  booking_start_datetime: string;
  /**
   * Booking end datetime
   * @format date-time
   */
  booking_end_datetime: string;
}

export interface PhotoAd {
  /**
   * Photo
   * @minLength 1
   */
  photo?: string;
}

export interface UserAdList {
  /** Id */
  id?: number;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /**
   * Text
   * @minLength 1
   */
  text?: string;
  /**
   * Address
   * @minLength 1
   */
  address?: string;
  /** Rating */
  rating?: string;
  photos?: PhotoAd[];
}

export interface ExcursionAdUser {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  /** Favorite count */
  favorite_count?: string;
  photos?: PhotoAd[];
  /** Category type */
  category_type?: string;
  excursion_type: DictionarySite;
  /** С гидом */
  with_guide?: boolean;
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за экскурсию
   * @min 0
   * @max 2147483647
   */
  price_per_excursion?: number | null;
  dress_code: DictionarySite;
  /** Views */
  views?: string;
}

export interface FeedbackPhotoWrite {
  /**
   * Photo
   * @format uri
   */
  photo?: string;
}

export interface FeedbackWrite {
  /** Id */
  id?: number;
  /** Текст */
  text?: string | null;
  /**
   * Оценка
   * @min 0
   * @max 2147483647
   */
  rating: number;
  photos?: FeedbackPhotoWrite[];
}

export interface FeedbackPhotoDelete {
  /** Id */
  id: number;
}

export interface HousingAdBookingWrite {
  /** Ad id */
  ad_id: number;
  /**
   * Booking start datetime
   * @format date-time
   */
  booking_start_datetime: string;
  /**
   * Booking end datetime
   * @format date-time
   */
  booking_end_datetime: string;
}

export interface RentHousingAdUserList {
  /** Id */
  id?: number;
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /**
   * Text
   * @minLength 1
   */
  text?: string;
  /**
   * Address
   * @minLength 1
   */
  address?: string;
  /** Rating */
  rating?: string;
  photos?: PhotoAd[];
  /** Sleep place count */
  sleep_place_count: number;
  /** Area */
  area: number;
  /**
   * Rent type
   * @minLength 1
   */
  rent_type: string;
  /** Price per hour */
  price_per_hour: number;
  /** Price per day */
  price_per_day: number;
  /** Days */
  days?: string;
  /** Hours */
  hours?: string;
  /** Price for days */
  price_for_days?: string;
  /** Price for hours */
  price_for_hours?: string;
}

export interface RentHousingAdUser {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  comfort_items: DictionarySite[];
  /** Favorite count */
  favorite_count?: string;
  photos?: PhotoAd[];
  /** Category type */
  category_type?: string;
  housing_type: DictionarySite;
  /**
   * Количество комнат
   * @min 0
   * @max 2147483647
   */
  room_count?: number | null;
  /** Студия */
  is_studio?: boolean;
  /**
   * Максимальное количество гостей
   * @min 0
   * @max 2147483647
   */
  guests?: number | null;
  /** Можно с детьми */
  is_children_allowed?: boolean;
  /** Можно с животными */
  is_pets_allowed?: boolean;
  /**
   * Количество спальных мест
   * @min 0
   * @max 2147483647
   */
  sleep_place_count?: number | null;
  /** Время заезда */
  check_in_time?: string | null;
  /** Время выезда */
  check_out_time?: string | null;
  /** Площадь, кв.м. */
  area?: number | null;
  /** Тип аренды */
  rent_type?: 'hourly' | 'daily';
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
  /** Views */
  views?: string;
}

export interface RecreationAdUser {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  /** Favorite count */
  favorite_count?: string;
  photos?: PhotoAd[];
  /** Category type */
  category_type?: string;
  recreation_type: DictionarySite;
  /**
   * Средний чек
   * @min 0
   * @max 2147483647
   */
  average_bill?: number | null;
  /** Views */
  views?: string;
}

export interface TourAdBookingWrite {
  /** Ad id */
  ad_id: number;
  /**
   * Booking start datetime
   * @format date-time
   */
  booking_start_datetime: string;
  /**
   * Booking end datetime
   * @format date-time
   */
  booking_end_datetime: string;
}

export interface TourAdUser {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  /** Favorite count */
  favorite_count?: string;
  photos?: PhotoAd[];
  /** Category type */
  category_type?: string;
  tour_type: DictionarySite;
  /** С гидом */
  with_guide?: boolean;
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /**
   * Цена за тур
   * @min 0
   * @max 2147483647
   */
  price_per_tour?: number | null;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
  dress_code: DictionarySite;
  /** Горящий */
  is_last_minute_tour?: boolean;
  /** Views */
  views?: string;
}

export interface TransportAdBookingWrite {
  /** Ad id */
  ad_id: number;
  /**
   * Booking start datetime
   * @format date-time
   */
  booking_start_datetime: string;
  /**
   * Booking end datetime
   * @format date-time
   */
  booking_end_datetime: string;
}

export interface RentTransportAdUser {
  /** ID */
  id?: number;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Описание
   * @minLength 1
   */
  text: string;
  /**
   * Адрес
   * @minLength 1
   * @maxLength 255
   */
  address: string;
  /**
   * Ссылка на видео
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  currency: CurrencySite;
  contacts?: ContactRead[];
  feedbacks?: FeedbackRead[];
  /** Favorite count */
  favorite_count?: string;
  photos?: PhotoAd[];
  /** Category type */
  category_type?: string;
  transport_type: DictionarySite;
  /** Тип аренды */
  rent_type?: 'hourly' | 'daily';
  /**
   * Цена за час
   * @min 0
   * @max 2147483647
   */
  price_per_hour?: number | null;
  /** Views */
  views?: string;
  /**
   * Цена за сутки
   * @min 0
   * @max 2147483647
   */
  price_per_day?: number | null;
}

export interface TopicSite {
  /** ID */
  id?: number;
  /**
   * Тема
   * @minLength 1
   * @maxLength 255
   */
  title: string;
}

export interface ArticleImageSite {
  /**
   * File
   * @format uri
   */
  file?: string;
}

export interface ArticleSite {
  /** ID */
  id?: number;
  topic?: TopicSite;
  images?: ArticleImageSite[];
  /**
   * Название статьи
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Текст статьи
   * @minLength 1
   */
  text: string;
  /** Статус статьи */
  is_published?: boolean;
  /**
   * Дата публикации статьи
   * @format date-time
   */
  published_date?: string | null;
}

export interface LoginUserData {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Пароль
   * @minLength 1
   */
  password: string;
  /**
   * Access-токен
   * @minLength 1
   */
  access_token?: string;
  /**
   * Refresh-токен
   * @minLength 1
   */
  refresh_token?: string;
}

export interface UserRefreshTokenData {
  /**
   * Access-токен
   * @minLength 1
   */
  access_token?: string;
  /**
   * Refresh-токен
   * @minLength 1
   */
  refresh_token: string;
}

export interface RegisterUserData {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Пароль
   * @minLength 1
   */
  password: string;
  /**
   * Подтверждение пароля
   * @minLength 1
   */
  password_2: string;
  /** Согласен на обработку персональных данных */
  is_privacy_policy_confirmed: boolean;
  /**
   * Роль
   * @minLength 1
   */
  role: string;
}

export interface ResetPasswordRequest {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface ResetPasswordData {
  /**
   * UID
   * @minLength 1
   */
  uid: string;
  /**
   * Токен
   * @minLength 1
   */
  token: string;
  /**
   * Пароль
   * @minLength 1
   */
  password: string;
  /**
   * Подтверждение пароля
   * @minLength 1
   */
  password_2: string;
}

export interface BusinessUserFileWrite {
  /**
   * Документ
   * @format uri
   */
  file?: string;
}

export interface FlatPage {
  /** ID */
  id?: number;
  /** Заголовок */
  title: 'privacy_policy' | 'site_rules' | 'public_offer' | 'cookie_policy' | 'user_agreement';
  /**
   * Текст
   * @minLength 1
   */
  text?: string | null;
}

export interface UserInfo {
  /** ID */
  id: number;
  /**
   * Email
   * @minLength 1
   */
  email: string;
  /**
   * Имя
   * @minLength 1
   */
  first_name: string;
  /**
   * Отчество
   * @minLength 1
   */
  middle_name: string;
  /**
   * Фамилия
   * @minLength 1
   */
  last_name: string;
  /**
   * Роль
   * @minLength 1
   */
  role: string;
  /**
   * Статус пользователя
   * @minLength 1
   */
  status: string;
  /**
   * Статус модерации
   * @minLength 1
   */
  moderation_status?: string | null;
  /** Подписка на рассылку */
  is_subscribed: boolean;
  /** Количество объявлений в избранном */
  favorite_count: number;
  /** Количество непрочитанных уведомлений */
  notification_count: number;
}

export interface NewsImageSite {
  /**
   * Image
   * @format uri
   */
  image?: string;
}

export interface NewsSite {
  /** ID */
  id?: number;
  images?: NewsImageSite[];
  /**
   * Дата публикации
   * @format date-time
   */
  published_date?: string | null;
  /** Is published */
  is_published?: boolean;
  /**
   * Заголовок
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * Preview
   * @format uri
   */
  preview?: string | null;
  /**
   * Текст новости
   * @minLength 1
   */
  text: string;
  /**
   * Url
   * @format uri
   * @maxLength 200
   */
  url?: string | null;
  /** Tags */
  tags?: string | null;
}

export interface NotificationList {
  /** ID */
  id?: number;
  /**
   * От кого
   * @minLength 1
   * @maxLength 255
   */
  sender: string;
  /**
   * Тема
   * @minLength 1
   * @maxLength 255
   */
  subject: string;
  /**
   * Дата и время создания
   * @format date-time
   */
  created_at?: string;
  /** Статус */
  status?: 'new' | 'read' | 'deleted';
}

export interface NotificationDetail {
  /** ID */
  id?: number;
  /**
   * От кого
   * @minLength 1
   * @maxLength 255
   */
  sender: string;
  /**
   * Тема
   * @minLength 1
   * @maxLength 255
   */
  subject: string;
  /**
   * Содержание
   * @minLength 1
   */
  body: string;
  /**
   * Дата и время создания
   * @format date-time
   */
  created_at?: string;
}

export interface Subscribe {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface RegisterSupportRequest {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email?: string;
  /**
   * Запрос
   * @minLength 1
   */
  text: string;
}

export interface LegalAddressWrite {
  /**
   * Индекс
   * @maxLength 10
   */
  zip_code?: string | null;
  /**
   * Страна
   * @maxLength 100
   */
  country?: string | null;
  /**
   * Регион
   * @maxLength 255
   */
  region?: string | null;
  /**
   * Населенный пункт
   * @maxLength 255
   */
  city?: string | null;
  /**
   * Улица
   * @maxLength 255
   */
  street?: string | null;
  /**
   * Дом
   * @maxLength 255
   */
  building?: string | null;
  /**
   * Квартира
   * @maxLength 255
   */
  apartment?: string | null;
  /**
   * Корпус
   * @maxLength 255
   */
  corpus?: string | null;
  /**
   * Офис
   * @maxLength 255
   */
  office?: string | null;
}

export interface BusinessInfoWrite {
  /** Форма юридического лица */
  organization_type: 'ip' | 'ooo' | 'ao' | 'zao' | 'ano' | 'sonko' | 'ndp';
  /**
   * Полное юридическое наименование
   * @maxLength 255
   */
  full_legal_name?: string | null;
  /**
   * ФИО руководителя
   * @maxLength 255
   */
  manager_full_name?: string | null;
  /** Должность руководителя */
  manager_post?:
    | 'general_manager'
    | 'director'
    | 'president'
    | 'chairman'
    | 'individual_entrepreneur'
    | 'superintendent'
    | null;
  /**
   * ИНН
   * @maxLength 12
   */
  inn?: string | null;
  /**
   * КПП
   * @maxLength 9
   */
  kpp?: string | null;
  /**
   * Расчетный счет
   * @min -2147483648
   * @max 2147483647
   */
  current_account?: number | null;
  /**
   * Корреспондентский счет
   * @min -2147483648
   * @max 2147483647
   */
  correspondent_account?: number | null;
  /**
   * БИК
   * @maxLength 11
   */
  bic?: string | null;
  /**
   * ОГРН
   * @maxLength 13
   */
  ogrn?: string | null;
  /**
   * ОГРНИП
   * @maxLength 15
   */
  ogrnip?: string | null;
  /**
   * Город/Населенный пункт
   * @maxLength 255
   */
  city?: string | null;
  /**
   * Имя контактного лица
   * @maxLength 150
   */
  contact_person_name?: string | null;
  /**
   * Фамилия контактного лица
   * @maxLength 150
   */
  contact_person_surname?: string | null;
  /**
   * Отчество контактного лица
   * @maxLength 150
   */
  contact_person_middle_name?: string | null;
  /**
   * Номер телефона
   * @maxLength 128
   */
  phone?: string | null;
  /**
   * Email
   * @format email
   * @maxLength 254
   */
  email?: string | null;
}

export interface BusinessUserWrite {
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 254
   */
  email: string;
  /**
   * Имя
   * @maxLength 150
   */
  first_name?: string | null;
  /**
   * Отчество
   * @maxLength 150
   */
  middle_name?: string | null;
  /**
   * Фамилия
   * @maxLength 150
   */
  last_name?: string | null;
  /**
   * Телефон
   * @minLength 1
   */
  phone?: string;
  /**
   * Изменился email
   * @default false
   */
  change_email?: boolean;
  physical_address: PhysicalAddressRead;
  legal_address?: LegalAddressWrite;
  business_info?: BusinessInfoWrite;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://127.0.0.1:8000/api/v1';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title MirTravel
 * @version v1
 * @baseUrl http://127.0.0.1:8000/api/v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * @description Вьюсет для CRUD операций над моделью статей.
     *
     * @tags admin-articles
     * @name AdminArticlesList
     * @request GET:/admin/articles/
     * @secure
     */
    adminArticlesList: (
      query?: {
        /** topic__id */
        topic__id?: string;
        /** is_published */
        is_published?: string;
        /** A search term. */
        search?: string;
        /** Which field to use when ordering the results. */
        ordering?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ArticleRead[];
        },
        any
      >({
        path: `/admin/articles/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью статей.
     *
     * @tags admin-articles
     * @name AdminArticlesCreate
     * @request POST:/admin/articles/
     * @secure
     */
    adminArticlesCreate: (data: ArticleWrite, params: RequestParams = {}) =>
      this.request<ArticleWrite, any>({
        path: `/admin/articles/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над изображениями статей.
     *
     * @tags admin-articles
     * @name AdminArticlesImagesCreate
     * @request POST:/admin/articles/{article_pk}/images/
     * @secure
     */
    adminArticlesImagesCreate: (
      articlePk: string,
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArticleImageWrite, any>({
        path: `/admin/articles/${articlePk}/images/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над изображениями статей.
     *
     * @tags admin-articles
     * @name AdminArticlesImagesDelete
     * @request DELETE:/admin/articles/{article_pk}/images/{id}/
     * @secure
     */
    adminArticlesImagesDelete: (articlePk: string, id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/articles/${articlePk}/images/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью статей.
     *
     * @tags admin-articles
     * @name AdminArticlesRead
     * @request GET:/admin/articles/{id}/
     * @secure
     */
    adminArticlesRead: (id: number, params: RequestParams = {}) =>
      this.request<ArticleRead, any>({
        path: `/admin/articles/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью статей.
     *
     * @tags admin-articles
     * @name AdminArticlesUpdate
     * @request PUT:/admin/articles/{id}/
     * @secure
     */
    adminArticlesUpdate: (id: number, data: ArticleWrite, params: RequestParams = {}) =>
      this.request<ArticleWrite, any>({
        path: `/admin/articles/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью статей.
     *
     * @tags admin-articles
     * @name AdminArticlesPartialUpdate
     * @request PATCH:/admin/articles/{id}/
     * @secure
     */
    adminArticlesPartialUpdate: (id: number, data: ArticleWrite, params: RequestParams = {}) =>
      this.request<ArticleWrite, any>({
        path: `/admin/articles/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью статей.
     *
     * @tags admin-articles
     * @name AdminArticlesDelete
     * @request DELETE:/admin/articles/{id}/
     * @secure
     */
    adminArticlesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/articles/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Авторизация пользователя.
     *
     * @tags admin-auth
     * @name AdminAuthLogin
     * @request POST:/admin/auth/login/
     * @secure
     */
    adminAuthLogin: (data: LoginEmployeeUserData, params: RequestParams = {}) =>
      this.request<LoginEmployeeUserData, any>({
        path: `/admin/auth/login/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ЮЛ в админке.
     *
     * @tags admin-business-users
     * @name AdminBusinessUsersList
     * @request GET:/admin/business-users/
     * @secure
     */
    adminBusinessUsersList: (
      query?: {
        /** A search term. */
        search?: string;
        /** status */
        status?: 'waiting_register_confirmation' | 'active' | 'blocked' | 'waiting_mail_confirmation';
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: UserRead[];
        },
        any
      >({
        path: `/admin/business-users/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ЮЛ в админке.
     *
     * @tags admin-business-users
     * @name AdminBusinessUsersRead
     * @request GET:/admin/business-users/{id}/
     * @secure
     */
    adminBusinessUsersRead: (id: number, params: RequestParams = {}) =>
      this.request<UserRead, any>({
        path: `/admin/business-users/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ЮЛ в админке.
     *
     * @tags admin-business-users
     * @name AdminBusinessUsersUpdate
     * @request PUT:/admin/business-users/{id}/
     * @secure
     */
    adminBusinessUsersUpdate: (id: number, data: UserWrite, params: RequestParams = {}) =>
      this.request<UserWrite, any>({
        path: `/admin/business-users/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ЮЛ в админке.
     *
     * @tags admin-business-users
     * @name AdminBusinessUsersPartialUpdate
     * @request PATCH:/admin/business-users/{id}/
     * @secure
     */
    adminBusinessUsersPartialUpdate: (id: number, data: UserWrite, params: RequestParams = {}) =>
      this.request<UserWrite, any>({
        path: `/admin/business-users/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ЮЛ в админке.
     *
     * @tags admin-business-users
     * @name AdminBusinessUsersDelete
     * @request DELETE:/admin/business-users/{id}/
     * @secure
     */
    adminBusinessUsersDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/business-users/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Action получения списка отправленных уведомлений пользователя.
     *
     * @tags admin-business-users
     * @name AdminBusinessUsersNotifications
     * @request GET:/admin/business-users/{id}/notifications/
     * @secure
     */
    adminBusinessUsersNotifications: (id: number, params: RequestParams = {}) =>
      this.request<UserNotification, any>({
        path: `/admin/business-users/${id}/notifications/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью стоп-выражений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesBadWordsList
     * @request GET:/admin/dictionaries/bad-words/
     * @secure
     */
    adminDictionariesBadWordsList: (params: RequestParams = {}) =>
      this.request<BadWord[], any>({
        path: `/admin/dictionaries/bad-words/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью стоп-выражений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesBadWordsCreate
     * @request POST:/admin/dictionaries/bad-words/
     * @secure
     */
    adminDictionariesBadWordsCreate: (data: BadWord, params: RequestParams = {}) =>
      this.request<BadWord, any>({
        path: `/admin/dictionaries/bad-words/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью стоп-выражений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesBadWordsRead
     * @request GET:/admin/dictionaries/bad-words/{id}/
     * @secure
     */
    adminDictionariesBadWordsRead: (id: number, params: RequestParams = {}) =>
      this.request<BadWord, any>({
        path: `/admin/dictionaries/bad-words/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью стоп-выражений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesBadWordsUpdate
     * @request PUT:/admin/dictionaries/bad-words/{id}/
     * @secure
     */
    adminDictionariesBadWordsUpdate: (id: number, data: BadWord, params: RequestParams = {}) =>
      this.request<BadWord, any>({
        path: `/admin/dictionaries/bad-words/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью стоп-выражений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesBadWordsPartialUpdate
     * @request PATCH:/admin/dictionaries/bad-words/{id}/
     * @secure
     */
    adminDictionariesBadWordsPartialUpdate: (id: number, data: BadWord, params: RequestParams = {}) =>
      this.request<BadWord, any>({
        path: `/admin/dictionaries/bad-words/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью стоп-выражений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesBadWordsDelete
     * @request DELETE:/admin/dictionaries/bad-words/{id}/
     * @secure
     */
    adminDictionariesBadWordsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/bad-words/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью предметов удобств.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesComfortItemsList
     * @request GET:/admin/dictionaries/comfort-items/
     * @secure
     */
    adminDictionariesComfortItemsList: (params: RequestParams = {}) =>
      this.request<ComfortItem[], any>({
        path: `/admin/dictionaries/comfort-items/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью предметов удобств.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesComfortItemsCreate
     * @request POST:/admin/dictionaries/comfort-items/
     * @secure
     */
    adminDictionariesComfortItemsCreate: (data: ComfortItem, params: RequestParams = {}) =>
      this.request<ComfortItem, any>({
        path: `/admin/dictionaries/comfort-items/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью предметов удобств.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesComfortItemsRead
     * @request GET:/admin/dictionaries/comfort-items/{id}/
     * @secure
     */
    adminDictionariesComfortItemsRead: (id: number, params: RequestParams = {}) =>
      this.request<ComfortItem, any>({
        path: `/admin/dictionaries/comfort-items/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью предметов удобств.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesComfortItemsUpdate
     * @request PUT:/admin/dictionaries/comfort-items/{id}/
     * @secure
     */
    adminDictionariesComfortItemsUpdate: (id: number, data: ComfortItem, params: RequestParams = {}) =>
      this.request<ComfortItem, any>({
        path: `/admin/dictionaries/comfort-items/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью предметов удобств.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesComfortItemsPartialUpdate
     * @request PATCH:/admin/dictionaries/comfort-items/{id}/
     * @secure
     */
    adminDictionariesComfortItemsPartialUpdate: (id: number, data: ComfortItem, params: RequestParams = {}) =>
      this.request<ComfortItem, any>({
        path: `/admin/dictionaries/comfort-items/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью предметов удобств.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesComfortItemsDelete
     * @request DELETE:/admin/dictionaries/comfort-items/{id}/
     * @secure
     */
    adminDictionariesComfortItemsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/comfort-items/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью валюты.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesCurrencyList
     * @request GET:/admin/dictionaries/currency/
     * @secure
     */
    adminDictionariesCurrencyList: (params: RequestParams = {}) =>
      this.request<Currency[], any>({
        path: `/admin/dictionaries/currency/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью валюты.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesCurrencyCreate
     * @request POST:/admin/dictionaries/currency/
     * @secure
     */
    adminDictionariesCurrencyCreate: (data: Currency, params: RequestParams = {}) =>
      this.request<Currency, any>({
        path: `/admin/dictionaries/currency/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью валюты.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesCurrencyRead
     * @request GET:/admin/dictionaries/currency/{id}/
     * @secure
     */
    adminDictionariesCurrencyRead: (id: number, params: RequestParams = {}) =>
      this.request<Currency, any>({
        path: `/admin/dictionaries/currency/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью валюты.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesCurrencyUpdate
     * @request PUT:/admin/dictionaries/currency/{id}/
     * @secure
     */
    adminDictionariesCurrencyUpdate: (id: number, data: Currency, params: RequestParams = {}) =>
      this.request<Currency, any>({
        path: `/admin/dictionaries/currency/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью валюты.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesCurrencyPartialUpdate
     * @request PATCH:/admin/dictionaries/currency/{id}/
     * @secure
     */
    adminDictionariesCurrencyPartialUpdate: (id: number, data: Currency, params: RequestParams = {}) =>
      this.request<Currency, any>({
        path: `/admin/dictionaries/currency/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью валюты.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesCurrencyDelete
     * @request DELETE:/admin/dictionaries/currency/{id}/
     * @secure
     */
    adminDictionariesCurrencyDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/currency/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью формы одежды.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesDressCodeTypeList
     * @request GET:/admin/dictionaries/dress-code-type/
     * @secure
     */
    adminDictionariesDressCodeTypeList: (params: RequestParams = {}) =>
      this.request<DressCodeType[], any>({
        path: `/admin/dictionaries/dress-code-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью формы одежды.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesDressCodeTypeCreate
     * @request POST:/admin/dictionaries/dress-code-type/
     * @secure
     */
    adminDictionariesDressCodeTypeCreate: (data: DressCodeType, params: RequestParams = {}) =>
      this.request<DressCodeType, any>({
        path: `/admin/dictionaries/dress-code-type/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью формы одежды.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesDressCodeTypeRead
     * @request GET:/admin/dictionaries/dress-code-type/{id}/
     * @secure
     */
    adminDictionariesDressCodeTypeRead: (id: number, params: RequestParams = {}) =>
      this.request<DressCodeType, any>({
        path: `/admin/dictionaries/dress-code-type/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью формы одежды.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesDressCodeTypeUpdate
     * @request PUT:/admin/dictionaries/dress-code-type/{id}/
     * @secure
     */
    adminDictionariesDressCodeTypeUpdate: (id: number, data: DressCodeType, params: RequestParams = {}) =>
      this.request<DressCodeType, any>({
        path: `/admin/dictionaries/dress-code-type/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью формы одежды.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesDressCodeTypePartialUpdate
     * @request PATCH:/admin/dictionaries/dress-code-type/{id}/
     * @secure
     */
    adminDictionariesDressCodeTypePartialUpdate: (id: number, data: DressCodeType, params: RequestParams = {}) =>
      this.request<DressCodeType, any>({
        path: `/admin/dictionaries/dress-code-type/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью формы одежды.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesDressCodeTypeDelete
     * @request DELETE:/admin/dictionaries/dress-code-type/{id}/
     * @secure
     */
    adminDictionariesDressCodeTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/dress-code-type/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов экскурсий.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesExcursionTypeList
     * @request GET:/admin/dictionaries/excursion-type/
     * @secure
     */
    adminDictionariesExcursionTypeList: (params: RequestParams = {}) =>
      this.request<ExcursionType[], any>({
        path: `/admin/dictionaries/excursion-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов экскурсий.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesExcursionTypeCreate
     * @request POST:/admin/dictionaries/excursion-type/
     * @secure
     */
    adminDictionariesExcursionTypeCreate: (data: ExcursionType, params: RequestParams = {}) =>
      this.request<ExcursionType, any>({
        path: `/admin/dictionaries/excursion-type/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов экскурсий.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesExcursionTypeRead
     * @request GET:/admin/dictionaries/excursion-type/{id}/
     * @secure
     */
    adminDictionariesExcursionTypeRead: (id: number, params: RequestParams = {}) =>
      this.request<ExcursionType, any>({
        path: `/admin/dictionaries/excursion-type/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов экскурсий.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesExcursionTypeUpdate
     * @request PUT:/admin/dictionaries/excursion-type/{id}/
     * @secure
     */
    adminDictionariesExcursionTypeUpdate: (id: number, data: ExcursionType, params: RequestParams = {}) =>
      this.request<ExcursionType, any>({
        path: `/admin/dictionaries/excursion-type/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов экскурсий.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesExcursionTypePartialUpdate
     * @request PATCH:/admin/dictionaries/excursion-type/{id}/
     * @secure
     */
    adminDictionariesExcursionTypePartialUpdate: (id: number, data: ExcursionType, params: RequestParams = {}) =>
      this.request<ExcursionType, any>({
        path: `/admin/dictionaries/excursion-type/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов экскурсий.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesExcursionTypeDelete
     * @request DELETE:/admin/dictionaries/excursion-type/{id}/
     * @secure
     */
    adminDictionariesExcursionTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/excursion-type/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов жилья.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesHousingTypeList
     * @request GET:/admin/dictionaries/housing-type/
     * @secure
     */
    adminDictionariesHousingTypeList: (params: RequestParams = {}) =>
      this.request<HousingType[], any>({
        path: `/admin/dictionaries/housing-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов жилья.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesHousingTypeCreate
     * @request POST:/admin/dictionaries/housing-type/
     * @secure
     */
    adminDictionariesHousingTypeCreate: (data: HousingType, params: RequestParams = {}) =>
      this.request<HousingType, any>({
        path: `/admin/dictionaries/housing-type/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов жилья.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesHousingTypeRead
     * @request GET:/admin/dictionaries/housing-type/{id}/
     * @secure
     */
    adminDictionariesHousingTypeRead: (id: number, params: RequestParams = {}) =>
      this.request<HousingType, any>({
        path: `/admin/dictionaries/housing-type/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов жилья.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesHousingTypeUpdate
     * @request PUT:/admin/dictionaries/housing-type/{id}/
     * @secure
     */
    adminDictionariesHousingTypeUpdate: (id: number, data: HousingType, params: RequestParams = {}) =>
      this.request<HousingType, any>({
        path: `/admin/dictionaries/housing-type/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов жилья.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesHousingTypePartialUpdate
     * @request PATCH:/admin/dictionaries/housing-type/{id}/
     * @secure
     */
    adminDictionariesHousingTypePartialUpdate: (id: number, data: HousingType, params: RequestParams = {}) =>
      this.request<HousingType, any>({
        path: `/admin/dictionaries/housing-type/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов жилья.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesHousingTypeDelete
     * @request DELETE:/admin/dictionaries/housing-type/{id}/
     * @secure
     */
    adminDictionariesHousingTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/housing-type/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов развлечений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesRecreationTypeList
     * @request GET:/admin/dictionaries/recreation-type/
     * @secure
     */
    adminDictionariesRecreationTypeList: (params: RequestParams = {}) =>
      this.request<RecreationType[], any>({
        path: `/admin/dictionaries/recreation-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов развлечений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesRecreationTypeCreate
     * @request POST:/admin/dictionaries/recreation-type/
     * @secure
     */
    adminDictionariesRecreationTypeCreate: (data: RecreationType, params: RequestParams = {}) =>
      this.request<RecreationType, any>({
        path: `/admin/dictionaries/recreation-type/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов развлечений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesRecreationTypeRead
     * @request GET:/admin/dictionaries/recreation-type/{id}/
     * @secure
     */
    adminDictionariesRecreationTypeRead: (id: number, params: RequestParams = {}) =>
      this.request<RecreationType, any>({
        path: `/admin/dictionaries/recreation-type/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов развлечений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesRecreationTypeUpdate
     * @request PUT:/admin/dictionaries/recreation-type/{id}/
     * @secure
     */
    adminDictionariesRecreationTypeUpdate: (id: number, data: RecreationType, params: RequestParams = {}) =>
      this.request<RecreationType, any>({
        path: `/admin/dictionaries/recreation-type/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов развлечений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesRecreationTypePartialUpdate
     * @request PATCH:/admin/dictionaries/recreation-type/{id}/
     * @secure
     */
    adminDictionariesRecreationTypePartialUpdate: (id: number, data: RecreationType, params: RequestParams = {}) =>
      this.request<RecreationType, any>({
        path: `/admin/dictionaries/recreation-type/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов развлечений.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesRecreationTypeDelete
     * @request DELETE:/admin/dictionaries/recreation-type/{id}/
     * @secure
     */
    adminDictionariesRecreationTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/recreation-type/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью темы.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTopicsList
     * @request GET:/admin/dictionaries/topics/
     * @secure
     */
    adminDictionariesTopicsList: (
      query?: {
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: TopicRead[];
        },
        any
      >({
        path: `/admin/dictionaries/topics/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью темы.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTopicsCreate
     * @request POST:/admin/dictionaries/topics/
     * @secure
     */
    adminDictionariesTopicsCreate: (data: TopicWrite, params: RequestParams = {}) =>
      this.request<TopicWrite, any>({
        path: `/admin/dictionaries/topics/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью темы.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTopicsRead
     * @request GET:/admin/dictionaries/topics/{id}/
     * @secure
     */
    adminDictionariesTopicsRead: (id: number, params: RequestParams = {}) =>
      this.request<TopicRead, any>({
        path: `/admin/dictionaries/topics/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью темы.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTopicsUpdate
     * @request PUT:/admin/dictionaries/topics/{id}/
     * @secure
     */
    adminDictionariesTopicsUpdate: (id: number, data: TopicWrite, params: RequestParams = {}) =>
      this.request<TopicWrite, any>({
        path: `/admin/dictionaries/topics/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью темы.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTopicsPartialUpdate
     * @request PATCH:/admin/dictionaries/topics/{id}/
     * @secure
     */
    adminDictionariesTopicsPartialUpdate: (id: number, data: TopicWrite, params: RequestParams = {}) =>
      this.request<TopicWrite, any>({
        path: `/admin/dictionaries/topics/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью темы.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTopicsDelete
     * @request DELETE:/admin/dictionaries/topics/{id}/
     * @secure
     */
    adminDictionariesTopicsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/topics/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов туров.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTourTypeList
     * @request GET:/admin/dictionaries/tour-type/
     * @secure
     */
    adminDictionariesTourTypeList: (params: RequestParams = {}) =>
      this.request<TourType[], any>({
        path: `/admin/dictionaries/tour-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов туров.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTourTypeCreate
     * @request POST:/admin/dictionaries/tour-type/
     * @secure
     */
    adminDictionariesTourTypeCreate: (data: TourType, params: RequestParams = {}) =>
      this.request<TourType, any>({
        path: `/admin/dictionaries/tour-type/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов туров.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTourTypeRead
     * @request GET:/admin/dictionaries/tour-type/{id}/
     * @secure
     */
    adminDictionariesTourTypeRead: (id: number, params: RequestParams = {}) =>
      this.request<TourType, any>({
        path: `/admin/dictionaries/tour-type/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов туров.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTourTypeUpdate
     * @request PUT:/admin/dictionaries/tour-type/{id}/
     * @secure
     */
    adminDictionariesTourTypeUpdate: (id: number, data: TourType, params: RequestParams = {}) =>
      this.request<TourType, any>({
        path: `/admin/dictionaries/tour-type/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов туров.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTourTypePartialUpdate
     * @request PATCH:/admin/dictionaries/tour-type/{id}/
     * @secure
     */
    adminDictionariesTourTypePartialUpdate: (id: number, data: TourType, params: RequestParams = {}) =>
      this.request<TourType, any>({
        path: `/admin/dictionaries/tour-type/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов туров.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTourTypeDelete
     * @request DELETE:/admin/dictionaries/tour-type/{id}/
     * @secure
     */
    adminDictionariesTourTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/tour-type/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов транспорта.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTransportTypeList
     * @request GET:/admin/dictionaries/transport-type/
     * @secure
     */
    adminDictionariesTransportTypeList: (params: RequestParams = {}) =>
      this.request<TransportType[], any>({
        path: `/admin/dictionaries/transport-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов транспорта.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTransportTypeCreate
     * @request POST:/admin/dictionaries/transport-type/
     * @secure
     */
    adminDictionariesTransportTypeCreate: (data: TransportType, params: RequestParams = {}) =>
      this.request<TransportType, any>({
        path: `/admin/dictionaries/transport-type/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов транспорта.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTransportTypeRead
     * @request GET:/admin/dictionaries/transport-type/{id}/
     * @secure
     */
    adminDictionariesTransportTypeRead: (id: number, params: RequestParams = {}) =>
      this.request<TransportType, any>({
        path: `/admin/dictionaries/transport-type/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов транспорта.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTransportTypeUpdate
     * @request PUT:/admin/dictionaries/transport-type/{id}/
     * @secure
     */
    adminDictionariesTransportTypeUpdate: (id: number, data: TransportType, params: RequestParams = {}) =>
      this.request<TransportType, any>({
        path: `/admin/dictionaries/transport-type/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов транспорта.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTransportTypePartialUpdate
     * @request PATCH:/admin/dictionaries/transport-type/{id}/
     * @secure
     */
    adminDictionariesTransportTypePartialUpdate: (id: number, data: TransportType, params: RequestParams = {}) =>
      this.request<TransportType, any>({
        path: `/admin/dictionaries/transport-type/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью типов транспорта.
     *
     * @tags admin-dictionaries
     * @name AdminDictionariesTransportTypeDelete
     * @request DELETE:/admin/dictionaries/transport-type/{id}/
     * @secure
     */
    adminDictionariesTransportTypeDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/dictionaries/transport-type/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет работы с сотрудниками в админке.
     *
     * @tags admin-employees
     * @name AdminEmployeesList
     * @request GET:/admin/employees/
     * @secure
     */
    adminEmployeesList: (
      query?: {
        /** A search term. */
        search?: string;
        /** role */
        role?: 'individual' | 'business' | 'owner' | 'deputy_owner' | 'admin' | 'moderator';
        /** status */
        status?: 'waiting_register_confirmation' | 'active' | 'blocked' | 'waiting_mail_confirmation';
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: EmployeeUserRead[];
        },
        any
      >({
        path: `/admin/employees/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с сотрудниками в админке.
     *
     * @tags admin-employees
     * @name AdminEmployeesCreate
     * @request POST:/admin/employees/
     * @secure
     */
    adminEmployeesCreate: (data: EmployeeUserCreate, params: RequestParams = {}) =>
      this.request<EmployeeUserCreate, any>({
        path: `/admin/employees/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Установка нового пароля сотрудника.
     *
     * @tags admin-employees
     * @name AdminEmployeesChangePassword
     * @request POST:/admin/employees/change_password/
     * @secure
     */
    adminEmployeesChangePassword: (data: ChangePasswordData, params: RequestParams = {}) =>
      this.request<ChangePasswordData, any>({
        path: `/admin/employees/change_password/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с сотрудниками в админке.
     *
     * @tags admin-employees
     * @name AdminEmployeesRead
     * @request GET:/admin/employees/{id}/
     * @secure
     */
    adminEmployeesRead: (id: number, params: RequestParams = {}) =>
      this.request<EmployeeUserRead, any>({
        path: `/admin/employees/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с сотрудниками в админке.
     *
     * @tags admin-employees
     * @name AdminEmployeesUpdate
     * @request PUT:/admin/employees/{id}/
     * @secure
     */
    adminEmployeesUpdate: (id: number, data: EmployeeUserUpdate, params: RequestParams = {}) =>
      this.request<EmployeeUserUpdate, any>({
        path: `/admin/employees/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с сотрудниками в админке.
     *
     * @tags admin-employees
     * @name AdminEmployeesPartialUpdate
     * @request PATCH:/admin/employees/{id}/
     * @secure
     */
    adminEmployeesPartialUpdate: (id: number, data: EmployeeUserUpdate, params: RequestParams = {}) =>
      this.request<EmployeeUserUpdate, any>({
        path: `/admin/employees/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с сотрудниками в админке.
     *
     * @tags admin-employees
     * @name AdminEmployeesDelete
     * @request DELETE:/admin/employees/{id}/
     * @secure
     */
    adminEmployeesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/employees/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра и редактирования простых страниц.
     *
     * @tags admin-flatpages
     * @name AdminFlatpagesList
     * @request GET:/admin/flatpages/
     * @secure
     */
    adminFlatpagesList: (params: RequestParams = {}) =>
      this.request<FlatPageRead[], any>({
        path: `/admin/flatpages/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра и редактирования простых страниц.
     *
     * @tags admin-flatpages
     * @name AdminFlatpagesRead
     * @request GET:/admin/flatpages/{id}/
     * @secure
     */
    adminFlatpagesRead: (id: number, params: RequestParams = {}) =>
      this.request<FlatPageRead, any>({
        path: `/admin/flatpages/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра и редактирования простых страниц.
     *
     * @tags admin-flatpages
     * @name AdminFlatpagesUpdate
     * @request PUT:/admin/flatpages/{id}/
     * @secure
     */
    adminFlatpagesUpdate: (id: number, data: FlatPageWrite, params: RequestParams = {}) =>
      this.request<FlatPageWrite, any>({
        path: `/admin/flatpages/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра и редактирования простых страниц.
     *
     * @tags admin-flatpages
     * @name AdminFlatpagesPartialUpdate
     * @request PATCH:/admin/flatpages/{id}/
     * @secure
     */
    adminFlatpagesPartialUpdate: (id: number, data: FlatPageWrite, params: RequestParams = {}) =>
      this.request<FlatPageWrite, any>({
        path: `/admin/flatpages/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ФЛ в админке.
     *
     * @tags admin-individual-users
     * @name AdminIndividualUsersList
     * @request GET:/admin/individual-users/
     * @secure
     */
    adminIndividualUsersList: (
      query?: {
        /** A search term. */
        search?: string;
        /** status */
        status?: 'waiting_register_confirmation' | 'active' | 'blocked' | 'waiting_mail_confirmation';
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: UserRead[];
        },
        any
      >({
        path: `/admin/individual-users/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ФЛ в админке.
     *
     * @tags admin-individual-users
     * @name AdminIndividualUsersRead
     * @request GET:/admin/individual-users/{id}/
     * @secure
     */
    adminIndividualUsersRead: (id: number, params: RequestParams = {}) =>
      this.request<UserRead, any>({
        path: `/admin/individual-users/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ФЛ в админке.
     *
     * @tags admin-individual-users
     * @name AdminIndividualUsersUpdate
     * @request PUT:/admin/individual-users/{id}/
     * @secure
     */
    adminIndividualUsersUpdate: (id: number, data: UserWrite, params: RequestParams = {}) =>
      this.request<UserWrite, any>({
        path: `/admin/individual-users/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ФЛ в админке.
     *
     * @tags admin-individual-users
     * @name AdminIndividualUsersPartialUpdate
     * @request PATCH:/admin/individual-users/{id}/
     * @secure
     */
    adminIndividualUsersPartialUpdate: (id: number, data: UserWrite, params: RequestParams = {}) =>
      this.request<UserWrite, any>({
        path: `/admin/individual-users/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с пользователями ФЛ в админке.
     *
     * @tags admin-individual-users
     * @name AdminIndividualUsersDelete
     * @request DELETE:/admin/individual-users/{id}/
     * @secure
     */
    adminIndividualUsersDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/individual-users/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Action получения списка отправленных уведомлений пользователя.
     *
     * @tags admin-individual-users
     * @name AdminIndividualUsersNotifications
     * @request GET:/admin/individual-users/{id}/notifications/
     * @secure
     */
    adminIndividualUsersNotifications: (id: number, params: RequestParams = {}) =>
      this.request<UserNotification, any>({
        path: `/admin/individual-users/${id}/notifications/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью новостей.
     *
     * @tags admin-news
     * @name AdminNewsList
     * @request GET:/admin/news/
     * @secure
     */
    adminNewsList: (
      query?: {
        /** is_published */
        is_published?: string;
        /** A search term. */
        search?: string;
        /** Which field to use when ordering the results. */
        ordering?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: NewsRead[];
        },
        any
      >({
        path: `/admin/news/`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью новостей.
     *
     * @tags admin-news
     * @name AdminNewsCreate
     * @request POST:/admin/news/
     * @secure
     */
    adminNewsCreate: (
      data: {
        /**
         * @minLength 1
         * @maxLength 255
         */
        title: string;
        /** @minLength 1 */
        text: string;
        /** @format binary */
        preview?: File | null;
        /**
         * @format uri
         * @maxLength 200
         */
        url?: string | null;
        tags?: string | null;
        is_published?: boolean;
        is_send: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<NewsWrite, any>({
        path: `/admin/news/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью новостей.
     *
     * @tags admin-news
     * @name AdminNewsRead
     * @request GET:/admin/news/{id}/
     * @secure
     */
    adminNewsRead: (id: number, params: RequestParams = {}) =>
      this.request<NewsRead, any>({
        path: `/admin/news/${id}/`,
        method: 'GET',
        secure: true,
        type: ContentType.UrlEncoded,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью новостей.
     *
     * @tags admin-news
     * @name AdminNewsUpdate
     * @request PUT:/admin/news/{id}/
     * @secure
     */
    adminNewsUpdate: (
      id: number,
      data: {
        /**
         * @minLength 1
         * @maxLength 255
         */
        title: string;
        /** @minLength 1 */
        text: string;
        /** @format binary */
        preview?: File | null;
        /**
         * @format uri
         * @maxLength 200
         */
        url?: string | null;
        tags?: string | null;
        is_published?: boolean;
        is_send: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<NewsWrite, any>({
        path: `/admin/news/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью новостей.
     *
     * @tags admin-news
     * @name AdminNewsPartialUpdate
     * @request PATCH:/admin/news/{id}/
     * @secure
     */
    adminNewsPartialUpdate: (
      id: number,
      data: {
        /**
         * @minLength 1
         * @maxLength 255
         */
        title: string;
        /** @minLength 1 */
        text: string;
        /** @format binary */
        preview?: File | null;
        /**
         * @format uri
         * @maxLength 200
         */
        url?: string | null;
        tags?: string | null;
        is_published?: boolean;
        is_send: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<NewsWrite, any>({
        path: `/admin/news/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над моделью новостей.
     *
     * @tags admin-news
     * @name AdminNewsDelete
     * @request DELETE:/admin/news/{id}/
     * @secure
     */
    adminNewsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/news/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над изображениями новостей.
     *
     * @tags admin-news
     * @name AdminNewsImagesCreate
     * @request POST:/admin/news/{news_pk}/images/
     * @secure
     */
    adminNewsImagesCreate: (
      newsPk: string,
      data: {
        /** @format binary */
        image: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<NewsImageWrite, any>({
        path: `/admin/news/${newsPk}/images/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций над изображениями новостей.
     *
     * @tags admin-news
     * @name AdminNewsImagesDelete
     * @request DELETE:/admin/news/{news_pk}/images/{id}/
     * @secure
     */
    adminNewsImagesDelete: (newsPk: string, id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/news/${newsPk}/images/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет для операций по заявкам пользователей в поддержку.
     *
     * @tags admin-support
     * @name AdminSupportList
     * @request GET:/admin/support/
     * @secure
     */
    adminSupportList: (
      query?: {
        /** is_processed */
        is_processed?: string;
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: SupportRequestList[];
        },
        any
      >({
        path: `/admin/support/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для операций по заявкам пользователей в поддержку.
     *
     * @tags admin-support
     * @name AdminSupportRead
     * @request GET:/admin/support/{id}/
     * @secure
     */
    adminSupportRead: (id: number, params: RequestParams = {}) =>
      this.request<SupportRequestDetail, any>({
        path: `/admin/support/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для операций по заявкам пользователей в поддержку.
     *
     * @tags admin-support
     * @name AdminSupportDelete
     * @request DELETE:/admin/support/{id}/
     * @secure
     */
    adminSupportDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/support/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Action сохранения ответа для запроса в поддержку.
     *
     * @tags admin-support
     * @name AdminSupportAnswer
     * @request POST:/admin/support/{id}/answer/
     * @secure
     */
    adminSupportAnswer: (id: number, data: SupportResponseData, params: RequestParams = {}) =>
      this.request<SupportResponse, any>({
        path: `/admin/support/${id}/answer/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для настроек пользователя.
     *
     * @tags admin-configuration
     * @name AdminUserConfigurationsRead
     * @request GET:/admin/user-configurations/{id}/
     * @secure
     */
    adminUserConfigurationsRead: (id: number, params: RequestParams = {}) =>
      this.request<UserConfiguration, any>({
        path: `/admin/user-configurations/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для настроек пользователя.
     *
     * @tags admin-configuration
     * @name AdminUserConfigurationsUpdate
     * @request PUT:/admin/user-configurations/{id}/
     * @secure
     */
    adminUserConfigurationsUpdate: (id: number, data: UserConfiguration, params: RequestParams = {}) =>
      this.request<UserConfiguration, any>({
        path: `/admin/user-configurations/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для настроек пользователя.
     *
     * @tags admin-configuration
     * @name AdminUserConfigurationsPartialUpdate
     * @request PATCH:/admin/user-configurations/{id}/
     * @secure
     */
    adminUserConfigurationsPartialUpdate: (id: number, data: UserConfiguration, params: RequestParams = {}) =>
      this.request<UserConfiguration, any>({
        path: `/admin/user-configurations/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для операций по заявкам пользователей на модерацию.
     *
     * @tags admin-user-moderation
     * @name AdminUserModerationList
     * @request GET:/admin/user-moderation/
     * @secure
     */
    adminUserModerationList: (
      query?: {
        /** is_active */
        is_active?: string;
        /** is_approved */
        is_approved?: string;
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: UserModerationRequestList[];
        },
        any
      >({
        path: `/admin/user-moderation/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Получение списка доступных модераторов.
     *
     * @tags admin-user-moderation
     * @name AdminUserModerationEmployees
     * @request GET:/admin/user-moderation/employees/
     * @secure
     */
    adminUserModerationEmployees: (
      query?: {
        /** is_active */
        is_active?: string;
        /** is_approved */
        is_approved?: string;
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ActiveEmployee, any>({
        path: `/admin/user-moderation/employees/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для операций по заявкам пользователей на модерацию.
     *
     * @tags admin-user-moderation
     * @name AdminUserModerationRead
     * @request GET:/admin/user-moderation/{id}/
     * @secure
     */
    adminUserModerationRead: (id: number, params: RequestParams = {}) =>
      this.request<UserModerationRequestRead, any>({
        path: `/admin/user-moderation/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Смена модератора по активной заявке.
     *
     * @tags admin-user-moderation
     * @name AdminUserModerationChangeEmployee
     * @request POST:/admin/user-moderation/{id}/change_employee/
     * @secure
     */
    adminUserModerationChangeEmployee: (id: number, data: ChangeEmployeeUserRequestData, params: RequestParams = {}) =>
      this.request<ChangeEmployeeUserRequestData, any>({
        path: `/admin/user-moderation/${id}/change_employee/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Подтверждение заявки.
     *
     * @tags admin-user-moderation
     * @name AdminUserModerationConfirm
     * @request POST:/admin/user-moderation/{id}/confirm/
     * @secure
     */
    adminUserModerationConfirm: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/admin/user-moderation/${id}/confirm/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Отклонение заявки.
     *
     * @tags admin-user-moderation
     * @name AdminUserModerationReject
     * @request POST:/admin/user-moderation/{id}/reject/
     * @secure
     */
    adminUserModerationReject: (id: number, data: RejectUserRequestData, params: RequestParams = {}) =>
      this.request<RejectUserRequestData, any>({
        path: `/admin/user-moderation/${id}/reject/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  site = {
    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionList
     * @request GET:/site/ads/business-excursion/
     * @secure
     */
    siteAdsBusinessExcursionList: (
      query?: {
        /** A search term. */
        search?: string;
        /** status */
        status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: BusinessAdList[];
        },
        any
      >({
        path: `/site/ads/business-excursion/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionCreate
     * @request POST:/site/ads/business-excursion/
     * @secure
     */
    siteAdsBusinessExcursionCreate: (data: ExcursionAdWrite, params: RequestParams = {}) =>
      this.request<ExcursionAdWrite, any>({
        path: `/site/ads/business-excursion/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий экскурсий.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionImagesCreate
     * @request POST:/site/ads/business-excursion/{ad_pk}/images/
     * @secure
     */
    siteAdsBusinessExcursionImagesCreate: (
      adPk: string,
      data: {
        /** @format binary */
        photo: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExcursionAdPhoto, any>({
        path: `/site/ads/business-excursion/${adPk}/images/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий экскурсий.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionImagesDelete
     * @request DELETE:/site/ads/business-excursion/{ad_pk}/images/{id}/
     * @secure
     */
    siteAdsBusinessExcursionImagesDelete: (adPk: string, id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-excursion/${adPk}/images/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionRead
     * @request GET:/site/ads/business-excursion/{id}/
     * @secure
     */
    siteAdsBusinessExcursionRead: (id: number, params: RequestParams = {}) =>
      this.request<ExcursionAdRead, any>({
        path: `/site/ads/business-excursion/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionUpdate
     * @request PUT:/site/ads/business-excursion/{id}/
     * @secure
     */
    siteAdsBusinessExcursionUpdate: (id: number, data: ExcursionAdWrite, params: RequestParams = {}) =>
      this.request<ExcursionAdWrite, any>({
        path: `/site/ads/business-excursion/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionPartialUpdate
     * @request PATCH:/site/ads/business-excursion/{id}/
     * @secure
     */
    siteAdsBusinessExcursionPartialUpdate: (id: number, data: ExcursionAdWrite, params: RequestParams = {}) =>
      this.request<ExcursionAdWrite, any>({
        path: `/site/ads/business-excursion/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionDelete
     * @request DELETE:/site/ads/business-excursion/{id}/
     * @secure
     */
    siteAdsBusinessExcursionDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-excursion/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionBookings
     * @request GET:/site/ads/business-excursion/{id}/bookings/
     * @secure
     */
    siteAdsBusinessExcursionBookings: (id: number, params: RequestParams = {}) =>
      this.request<ExcursionAdRead, any>({
        path: `/site/ads/business-excursion/${id}/bookings/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionIsFavorite
     * @request POST:/site/ads/business-excursion/{id}/is_favorite/
     * @secure
     */
    siteAdsBusinessExcursionIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-excursion/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по экскурсиям: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsBusinessExcursionToArchive
     * @request PUT:/site/ads/business-excursion/{id}/to_archive/
     * @secure
     */
    siteAdsBusinessExcursionToArchive: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-excursion/${id}/to_archive/`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingList
     * @request GET:/site/ads/business-housing/
     * @secure
     */
    siteAdsBusinessHousingList: (
      query?: {
        /** A search term. */
        search?: string;
        /** status */
        status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: BusinessAdList[];
        },
        any
      >({
        path: `/site/ads/business-housing/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingCreate
     * @request POST:/site/ads/business-housing/
     * @secure
     */
    siteAdsBusinessHousingCreate: (data: RentHousingAdWrite, params: RequestParams = {}) =>
      this.request<RentHousingAdWrite, any>({
        path: `/site/ads/business-housing/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий аренды жилья.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingImagesCreate
     * @request POST:/site/ads/business-housing/{ad_pk}/images/
     * @secure
     */
    siteAdsBusinessHousingImagesCreate: (
      adPk: string,
      data: {
        /** @format binary */
        photo: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<RentHousingAdPhoto, any>({
        path: `/site/ads/business-housing/${adPk}/images/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий аренды жилья.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingImagesDelete
     * @request DELETE:/site/ads/business-housing/{ad_pk}/images/{id}/
     * @secure
     */
    siteAdsBusinessHousingImagesDelete: (adPk: string, id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-housing/${adPk}/images/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingRead
     * @request GET:/site/ads/business-housing/{id}/
     * @secure
     */
    siteAdsBusinessHousingRead: (id: number, params: RequestParams = {}) =>
      this.request<RentHousingAdRead, any>({
        path: `/site/ads/business-housing/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingUpdate
     * @request PUT:/site/ads/business-housing/{id}/
     * @secure
     */
    siteAdsBusinessHousingUpdate: (id: number, data: RentHousingAdWrite, params: RequestParams = {}) =>
      this.request<RentHousingAdWrite, any>({
        path: `/site/ads/business-housing/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingPartialUpdate
     * @request PATCH:/site/ads/business-housing/{id}/
     * @secure
     */
    siteAdsBusinessHousingPartialUpdate: (id: number, data: RentHousingAdWrite, params: RequestParams = {}) =>
      this.request<RentHousingAdWrite, any>({
        path: `/site/ads/business-housing/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingDelete
     * @request DELETE:/site/ads/business-housing/{id}/
     * @secure
     */
    siteAdsBusinessHousingDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-housing/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingBookings
     * @request GET:/site/ads/business-housing/{id}/bookings/
     * @secure
     */
    siteAdsBusinessHousingBookings: (id: number, params: RequestParams = {}) =>
      this.request<RentHousingAdRead, any>({
        path: `/site/ads/business-housing/${id}/bookings/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingIsFavorite
     * @request POST:/site/ads/business-housing/{id}/is_favorite/
     * @secure
     */
    siteAdsBusinessHousingIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-housing/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде жилья: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsBusinessHousingToArchive
     * @request PUT:/site/ads/business-housing/{id}/to_archive/
     * @secure
     */
    siteAdsBusinessHousingToArchive: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-housing/${id}/to_archive/`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationList
     * @request GET:/site/ads/business-recreation/
     * @secure
     */
    siteAdsBusinessRecreationList: (
      query?: {
        /** A search term. */
        search?: string;
        /** status */
        status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: BusinessAdList[];
        },
        any
      >({
        path: `/site/ads/business-recreation/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationCreate
     * @request POST:/site/ads/business-recreation/
     * @secure
     */
    siteAdsBusinessRecreationCreate: (data: RecreationAdWrite, params: RequestParams = {}) =>
      this.request<RecreationAdWrite, any>({
        path: `/site/ads/business-recreation/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий развлечений и отдыха.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationImagesCreate
     * @request POST:/site/ads/business-recreation/{ad_pk}/images/
     * @secure
     */
    siteAdsBusinessRecreationImagesCreate: (
      adPk: string,
      data: {
        /** @format binary */
        photo: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<RecreationAdPhoto, any>({
        path: `/site/ads/business-recreation/${adPk}/images/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий развлечений и отдыха.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationImagesDelete
     * @request DELETE:/site/ads/business-recreation/{ad_pk}/images/{id}/
     * @secure
     */
    siteAdsBusinessRecreationImagesDelete: (adPk: string, id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-recreation/${adPk}/images/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationRead
     * @request GET:/site/ads/business-recreation/{id}/
     * @secure
     */
    siteAdsBusinessRecreationRead: (id: number, params: RequestParams = {}) =>
      this.request<RecreationAdRead, any>({
        path: `/site/ads/business-recreation/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationUpdate
     * @request PUT:/site/ads/business-recreation/{id}/
     * @secure
     */
    siteAdsBusinessRecreationUpdate: (id: number, data: RecreationAdWrite, params: RequestParams = {}) =>
      this.request<RecreationAdWrite, any>({
        path: `/site/ads/business-recreation/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationPartialUpdate
     * @request PATCH:/site/ads/business-recreation/{id}/
     * @secure
     */
    siteAdsBusinessRecreationPartialUpdate: (id: number, data: RecreationAdWrite, params: RequestParams = {}) =>
      this.request<RecreationAdWrite, any>({
        path: `/site/ads/business-recreation/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationDelete
     * @request DELETE:/site/ads/business-recreation/{id}/
     * @secure
     */
    siteAdsBusinessRecreationDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-recreation/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationBookings
     * @request GET:/site/ads/business-recreation/{id}/bookings/
     * @secure
     */
    siteAdsBusinessRecreationBookings: (id: number, params: RequestParams = {}) =>
      this.request<RecreationAdRead, any>({
        path: `/site/ads/business-recreation/${id}/bookings/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationIsFavorite
     * @request POST:/site/ads/business-recreation/{id}/is_favorite/
     * @secure
     */
    siteAdsBusinessRecreationIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-recreation/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по развлечению/отдыху: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-recreation-ads
     * @name SiteAdsBusinessRecreationToArchive
     * @request PUT:/site/ads/business-recreation/{id}/to_archive/
     * @secure
     */
    siteAdsBusinessRecreationToArchive: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-recreation/${id}/to_archive/`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourList
     * @request GET:/site/ads/business-tour/
     * @secure
     */
    siteAdsBusinessTourList: (
      query?: {
        /** A search term. */
        search?: string;
        /** status */
        status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: BusinessAdList[];
        },
        any
      >({
        path: `/site/ads/business-tour/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourCreate
     * @request POST:/site/ads/business-tour/
     * @secure
     */
    siteAdsBusinessTourCreate: (data: TourAdWrite, params: RequestParams = {}) =>
      this.request<TourAdWrite, any>({
        path: `/site/ads/business-tour/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий туров.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourImagesCreate
     * @request POST:/site/ads/business-tour/{ad_pk}/images/
     * @secure
     */
    siteAdsBusinessTourImagesCreate: (
      adPk: string,
      data: {
        /** @format binary */
        photo: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<TourAdPhoto, any>({
        path: `/site/ads/business-tour/${adPk}/images/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий туров.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourImagesDelete
     * @request DELETE:/site/ads/business-tour/{ad_pk}/images/{id}/
     * @secure
     */
    siteAdsBusinessTourImagesDelete: (adPk: string, id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-tour/${adPk}/images/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourRead
     * @request GET:/site/ads/business-tour/{id}/
     * @secure
     */
    siteAdsBusinessTourRead: (id: number, params: RequestParams = {}) =>
      this.request<TourAdRead, any>({
        path: `/site/ads/business-tour/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourUpdate
     * @request PUT:/site/ads/business-tour/{id}/
     * @secure
     */
    siteAdsBusinessTourUpdate: (id: number, data: TourAdWrite, params: RequestParams = {}) =>
      this.request<TourAdWrite, any>({
        path: `/site/ads/business-tour/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourPartialUpdate
     * @request PATCH:/site/ads/business-tour/{id}/
     * @secure
     */
    siteAdsBusinessTourPartialUpdate: (id: number, data: TourAdWrite, params: RequestParams = {}) =>
      this.request<TourAdWrite, any>({
        path: `/site/ads/business-tour/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourDelete
     * @request DELETE:/site/ads/business-tour/{id}/
     * @secure
     */
    siteAdsBusinessTourDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-tour/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourBookings
     * @request GET:/site/ads/business-tour/{id}/bookings/
     * @secure
     */
    siteAdsBusinessTourBookings: (id: number, params: RequestParams = {}) =>
      this.request<TourAdRead, any>({
        path: `/site/ads/business-tour/${id}/bookings/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourIsFavorite
     * @request POST:/site/ads/business-tour/{id}/is_favorite/
     * @secure
     */
    siteAdsBusinessTourIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-tour/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по турам: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsBusinessTourToArchive
     * @request PUT:/site/ads/business-tour/{id}/to_archive/
     * @secure
     */
    siteAdsBusinessTourToArchive: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-tour/${id}/to_archive/`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportList
     * @request GET:/site/ads/business-transport/
     * @secure
     */
    siteAdsBusinessTransportList: (
      query?: {
        /** A search term. */
        search?: string;
        /** status */
        status?: 'published' | 'activated' | 'waiting_moderation' | 'moderation_rejected' | 'archived' | 'draft';
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: BusinessAdList[];
        },
        any
      >({
        path: `/site/ads/business-transport/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportCreate
     * @request POST:/site/ads/business-transport/
     * @secure
     */
    siteAdsBusinessTransportCreate: (data: RentTransportAdWrite, params: RequestParams = {}) =>
      this.request<RentTransportAdWrite, any>({
        path: `/site/ads/business-transport/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий аренды транспорта.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportImagesCreate
     * @request POST:/site/ads/business-transport/{ad_pk}/images/
     * @secure
     */
    siteAdsBusinessTransportImagesCreate: (
      adPk: string,
      data: {
        /** @format binary */
        photo: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<RentTransportAdPhoto, any>({
        path: `/site/ads/business-transport/${adPk}/images/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для CRUD операций для добавления фотографий аренды транспорта.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportImagesDelete
     * @request DELETE:/site/ads/business-transport/{ad_pk}/images/{id}/
     * @secure
     */
    siteAdsBusinessTransportImagesDelete: (adPk: string, id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-transport/${adPk}/images/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportRead
     * @request GET:/site/ads/business-transport/{id}/
     * @secure
     */
    siteAdsBusinessTransportRead: (id: number, params: RequestParams = {}) =>
      this.request<RentTransportAdRead, any>({
        path: `/site/ads/business-transport/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportUpdate
     * @request PUT:/site/ads/business-transport/{id}/
     * @secure
     */
    siteAdsBusinessTransportUpdate: (id: number, data: RentTransportAdWrite, params: RequestParams = {}) =>
      this.request<RentTransportAdWrite, any>({
        path: `/site/ads/business-transport/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportPartialUpdate
     * @request PATCH:/site/ads/business-transport/{id}/
     * @secure
     */
    siteAdsBusinessTransportPartialUpdate: (id: number, data: RentTransportAdWrite, params: RequestParams = {}) =>
      this.request<RentTransportAdWrite, any>({
        path: `/site/ads/business-transport/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportDelete
     * @request DELETE:/site/ads/business-transport/{id}/
     * @secure
     */
    siteAdsBusinessTransportDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-transport/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportBookings
     * @request GET:/site/ads/business-transport/{id}/bookings/
     * @secure
     */
    siteAdsBusinessTransportBookings: (id: number, params: RequestParams = {}) =>
      this.request<RentTransportAdRead, any>({
        path: `/site/ads/business-transport/${id}/bookings/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportIsFavorite
     * @request POST:/site/ads/business-transport/{id}/is_favorite/
     * @secure
     */
    siteAdsBusinessTransportIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-transport/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет объявлений по аренде транспорта: создание, редактирование и просмотр объекта в ЛК.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsBusinessTransportToArchive
     * @request PUT:/site/ads/business-transport/{id}/to_archive/
     * @secure
     */
    siteAdsBusinessTransportToArchive: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/business-transport/${id}/to_archive/`,
        method: 'PUT',
        secure: true,
        ...params,
      }),

    /**
     * @description Вью проверки содержания объявления на стоп-слова.
     *
     * @tags site-business-ad-text-check
     * @name SiteAdsCheckTextCreate
     * @summary Проверка текста на наличие стоп-слов
     * @request POST:/site/ads/check_text
     * @secure
     */
    siteAdsCheckTextCreate: (data: BadWord, params: RequestParams = {}) =>
      this.request<BadWord, any>({
        path: `/site/ads/check_text`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по экскурсии.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsExcursionBookingCreate
     * @request POST:/site/ads/excursion-booking/
     * @secure
     */
    siteAdsExcursionBookingCreate: (data: ExcursionAdBookingWrite, params: RequestParams = {}) =>
      this.request<ExcursionAdBookingWrite, any>({
        path: `/site/ads/excursion-booking/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по экскурсии.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsExcursionBookingUpdate
     * @request PUT:/site/ads/excursion-booking/{id}/
     * @secure
     */
    siteAdsExcursionBookingUpdate: (id: number, data: ExcursionAdBookingWrite, params: RequestParams = {}) =>
      this.request<ExcursionAdBookingWrite, any>({
        path: `/site/ads/excursion-booking/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по экскурсии.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsExcursionBookingPartialUpdate
     * @request PATCH:/site/ads/excursion-booking/{id}/
     * @secure
     */
    siteAdsExcursionBookingPartialUpdate: (id: number, data: ExcursionAdBookingWrite, params: RequestParams = {}) =>
      this.request<ExcursionAdBookingWrite, any>({
        path: `/site/ads/excursion-booking/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по экскурсии.
     *
     * @tags site-business-excursion-ads
     * @name SiteAdsExcursionBookingDelete
     * @request DELETE:/site/ads/excursion-booking/{id}/
     * @secure
     */
    siteAdsExcursionBookingDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/excursion-booking/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Получение списка выбранного типа объявлений. Доступно всем пользователям. Помимо описанных параметров реализованы фильтрация по диапазону. Выполняет с помощью параметра ?range_filter={*параметр*:{"from":*знач*, "to":*знач*}, *параметр*:...}. Параметры диапазонов: 1) booking_date - Диапазон свободных дат для выбора жилья. from и to. Может применяться только для аренды жилья. 2) price_per_hour - Диапазон цены за час. from и/или to. Может применяться к жилью, транспорту, турам, экскурсиям. 3) price_per_day - Диапазон цены за день. from и/или to. Может применяться к жилью, транспорту, турам. 4) price_per_tour - Диапазон цены за тур. from и/или to. Может применяться к турам. 5) price_per_excursion - Диапазон цены за экскурсию. from и/или to. Может применяться к экскурсиям. 6) average_bill - Диапазон среднего счета для развлечений. from и/или to. Может применяться к развлечениям.
     *
     * @tags site-user-excursion-ads
     * @name SiteAdsExcursionList
     * @request GET:/site/ads/excursion/
     * @secure
     */
    siteAdsExcursionList: (
      query?: {
        /** excursion_type */
        excursion_type?: string;
        /** with_guide */
        with_guide?: string;
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: UserAdList[];
        },
        any
      >({
        path: `/site/ads/excursion/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра экскурсий.
     *
     * @tags site-user-excursion-ads
     * @name SiteAdsExcursionRead
     * @request GET:/site/ads/excursion/{id}/
     * @secure
     */
    siteAdsExcursionRead: (id: number, params: RequestParams = {}) =>
      this.request<ExcursionAdUser, any>({
        path: `/site/ads/excursion/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Создание отзыва.
     *
     * @tags site-user-excursion-ads
     * @name SiteAdsExcursionAddFeedback
     * @request POST:/site/ads/excursion/{id}/add_feedback/
     * @secure
     */
    siteAdsExcursionAddFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/excursion/${id}/add_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удаление отзыва.
     *
     * @tags site-user-excursion-ads
     * @name SiteAdsExcursionDeleteFeedback
     * @request POST:/site/ads/excursion/{id}/delete_feedback/
     * @secure
     */
    siteAdsExcursionDeleteFeedback: (id: number, data: FeedbackPhotoDelete, params: RequestParams = {}) =>
      this.request<FeedbackPhotoDelete, any>({
        path: `/site/ads/excursion/${id}/delete_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Редактирование отзыва.
     *
     * @tags site-user-excursion-ads
     * @name SiteAdsExcursionEditFeedback
     * @request POST:/site/ads/excursion/{id}/edit_feedback/
     * @secure
     */
    siteAdsExcursionEditFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/excursion/${id}/edit_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра экскурсий.
     *
     * @tags site-user-excursion-ads
     * @name SiteAdsExcursionIncreaseViewCount
     * @request POST:/site/ads/excursion/{id}/increase_view_count/
     * @secure
     */
    siteAdsExcursionIncreaseViewCount: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/excursion/${id}/increase_view_count/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Добавление/удаление объявления из избранного.
     *
     * @tags site-user-excursion-ads
     * @name SiteAdsExcursionIsFavorite
     * @request POST:/site/ads/excursion/{id}/is_favorite/
     * @secure
     */
    siteAdsExcursionIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/excursion/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по аренде жилья.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsHousingBookingCreate
     * @request POST:/site/ads/housing-booking/
     * @secure
     */
    siteAdsHousingBookingCreate: (data: HousingAdBookingWrite, params: RequestParams = {}) =>
      this.request<HousingAdBookingWrite, any>({
        path: `/site/ads/housing-booking/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по аренде жилья.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsHousingBookingUpdate
     * @request PUT:/site/ads/housing-booking/{id}/
     * @secure
     */
    siteAdsHousingBookingUpdate: (id: number, data: HousingAdBookingWrite, params: RequestParams = {}) =>
      this.request<HousingAdBookingWrite, any>({
        path: `/site/ads/housing-booking/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по аренде жилья.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsHousingBookingPartialUpdate
     * @request PATCH:/site/ads/housing-booking/{id}/
     * @secure
     */
    siteAdsHousingBookingPartialUpdate: (id: number, data: HousingAdBookingWrite, params: RequestParams = {}) =>
      this.request<HousingAdBookingWrite, any>({
        path: `/site/ads/housing-booking/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по аренде жилья.
     *
     * @tags site-business-housing-ads
     * @name SiteAdsHousingBookingDelete
     * @request DELETE:/site/ads/housing-booking/{id}/
     * @secure
     */
    siteAdsHousingBookingDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/housing-booking/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Получение списка выбранного типа объявлений. Доступно всем пользователям. Помимо описанных параметров реализованы фильтрация по диапазону. Выполняет с помощью параметра ?range_filter={*параметр*:{"from":*знач*, "to":*знач*}, *параметр*:...}. Параметры диапазонов: 1) booking_date - Диапазон свободных дат для выбора жилья. from и to. Может применяться только для аренды жилья. 2) price_per_hour - Диапазон цены за час. from и/или to. Может применяться к жилью, транспорту, турам, экскурсиям. 3) price_per_day - Диапазон цены за день. from и/или to. Может применяться к жилью, транспорту, турам. 4) price_per_tour - Диапазон цены за тур. from и/или to. Может применяться к турам. 5) price_per_excursion - Диапазон цены за экскурсию. from и/или to. Может применяться к экскурсиям. 6) average_bill - Диапазон среднего счета для развлечений. from и/или to. Может применяться к развлечениям.
     *
     * @tags site-user-housing-ads
     * @name SiteAdsHousingList
     * @request GET:/site/ads/housing/
     * @secure
     */
    siteAdsHousingList: (
      query?: {
        /** housing_type */
        housing_type?: string;
        /** room_count */
        room_count?: string;
        /** is_studio */
        is_studio?: string;
        /** rent_type */
        rent_type?: 'hourly' | 'daily';
        /** guests */
        guests?: string;
        /** sleep_place_count */
        sleep_place_count?: string;
        /** is_children_allowed */
        is_children_allowed?: string;
        /** is_pets_allowed */
        is_pets_allowed?: string;
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: RentHousingAdUserList[];
        },
        any
      >({
        path: `/site/ads/housing/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра аренды жилья.
     *
     * @tags site-user-housing-ads
     * @name SiteAdsHousingRead
     * @request GET:/site/ads/housing/{id}/
     * @secure
     */
    siteAdsHousingRead: (id: number, params: RequestParams = {}) =>
      this.request<RentHousingAdUser, any>({
        path: `/site/ads/housing/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Создание отзыва.
     *
     * @tags site-user-housing-ads
     * @name SiteAdsHousingAddFeedback
     * @request POST:/site/ads/housing/{id}/add_feedback/
     * @secure
     */
    siteAdsHousingAddFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/housing/${id}/add_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удаление отзыва.
     *
     * @tags site-user-housing-ads
     * @name SiteAdsHousingDeleteFeedback
     * @request POST:/site/ads/housing/{id}/delete_feedback/
     * @secure
     */
    siteAdsHousingDeleteFeedback: (id: number, data: FeedbackPhotoDelete, params: RequestParams = {}) =>
      this.request<FeedbackPhotoDelete, any>({
        path: `/site/ads/housing/${id}/delete_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Редактирование отзыва.
     *
     * @tags site-user-housing-ads
     * @name SiteAdsHousingEditFeedback
     * @request POST:/site/ads/housing/{id}/edit_feedback/
     * @secure
     */
    siteAdsHousingEditFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/housing/${id}/edit_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра аренды жилья.
     *
     * @tags site-user-housing-ads
     * @name SiteAdsHousingIncreaseViewCount
     * @request POST:/site/ads/housing/{id}/increase_view_count/
     * @secure
     */
    siteAdsHousingIncreaseViewCount: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/housing/${id}/increase_view_count/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Добавление/удаление объявления из избранного.
     *
     * @tags site-user-housing-ads
     * @name SiteAdsHousingIsFavorite
     * @request POST:/site/ads/housing/{id}/is_favorite/
     * @secure
     */
    siteAdsHousingIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/housing/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Получение списка выбранного типа объявлений. Доступно всем пользователям. Помимо описанных параметров реализованы фильтрация по диапазону. Выполняет с помощью параметра ?range_filter={*параметр*:{"from":*знач*, "to":*знач*}, *параметр*:...}. Параметры диапазонов: 1) booking_date - Диапазон свободных дат для выбора жилья. from и to. Может применяться только для аренды жилья. 2) price_per_hour - Диапазон цены за час. from и/или to. Может применяться к жилью, транспорту, турам, экскурсиям. 3) price_per_day - Диапазон цены за день. from и/или to. Может применяться к жилью, транспорту, турам. 4) price_per_tour - Диапазон цены за тур. from и/или to. Может применяться к турам. 5) price_per_excursion - Диапазон цены за экскурсию. from и/или to. Может применяться к экскурсиям. 6) average_bill - Диапазон среднего счета для развлечений. from и/или to. Может применяться к развлечениям.
     *
     * @tags site-user-recreation-ads
     * @name SiteAdsRecreationList
     * @request GET:/site/ads/recreation/
     * @secure
     */
    siteAdsRecreationList: (
      query?: {
        /** recreation_type */
        recreation_type?: string;
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: UserAdList[];
        },
        any
      >({
        path: `/site/ads/recreation/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра развлечений и отдыха.
     *
     * @tags site-user-recreation-ads
     * @name SiteAdsRecreationRead
     * @request GET:/site/ads/recreation/{id}/
     * @secure
     */
    siteAdsRecreationRead: (id: number, params: RequestParams = {}) =>
      this.request<RecreationAdUser, any>({
        path: `/site/ads/recreation/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Создание отзыва.
     *
     * @tags site-user-recreation-ads
     * @name SiteAdsRecreationAddFeedback
     * @request POST:/site/ads/recreation/{id}/add_feedback/
     * @secure
     */
    siteAdsRecreationAddFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/recreation/${id}/add_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удаление отзыва.
     *
     * @tags site-user-recreation-ads
     * @name SiteAdsRecreationDeleteFeedback
     * @request POST:/site/ads/recreation/{id}/delete_feedback/
     * @secure
     */
    siteAdsRecreationDeleteFeedback: (id: number, data: FeedbackPhotoDelete, params: RequestParams = {}) =>
      this.request<FeedbackPhotoDelete, any>({
        path: `/site/ads/recreation/${id}/delete_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Редактирование отзыва.
     *
     * @tags site-user-recreation-ads
     * @name SiteAdsRecreationEditFeedback
     * @request POST:/site/ads/recreation/{id}/edit_feedback/
     * @secure
     */
    siteAdsRecreationEditFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/recreation/${id}/edit_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра развлечений и отдыха.
     *
     * @tags site-user-recreation-ads
     * @name SiteAdsRecreationIncreaseViewCount
     * @request POST:/site/ads/recreation/{id}/increase_view_count/
     * @secure
     */
    siteAdsRecreationIncreaseViewCount: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/recreation/${id}/increase_view_count/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Добавление/удаление объявления из избранного.
     *
     * @tags site-user-recreation-ads
     * @name SiteAdsRecreationIsFavorite
     * @request POST:/site/ads/recreation/{id}/is_favorite/
     * @secure
     */
    siteAdsRecreationIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/recreation/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по туру.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsTourBookingCreate
     * @request POST:/site/ads/tour-booking/
     * @secure
     */
    siteAdsTourBookingCreate: (data: TourAdBookingWrite, params: RequestParams = {}) =>
      this.request<TourAdBookingWrite, any>({
        path: `/site/ads/tour-booking/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по туру.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsTourBookingUpdate
     * @request PUT:/site/ads/tour-booking/{id}/
     * @secure
     */
    siteAdsTourBookingUpdate: (id: number, data: TourAdBookingWrite, params: RequestParams = {}) =>
      this.request<TourAdBookingWrite, any>({
        path: `/site/ads/tour-booking/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по туру.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsTourBookingPartialUpdate
     * @request PATCH:/site/ads/tour-booking/{id}/
     * @secure
     */
    siteAdsTourBookingPartialUpdate: (id: number, data: TourAdBookingWrite, params: RequestParams = {}) =>
      this.request<TourAdBookingWrite, any>({
        path: `/site/ads/tour-booking/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по туру.
     *
     * @tags site-business-tour-ads
     * @name SiteAdsTourBookingDelete
     * @request DELETE:/site/ads/tour-booking/{id}/
     * @secure
     */
    siteAdsTourBookingDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/tour-booking/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Получение списка выбранного типа объявлений. Доступно всем пользователям. Помимо описанных параметров реализованы фильтрация по диапазону. Выполняет с помощью параметра ?range_filter={*параметр*:{"from":*знач*, "to":*знач*}, *параметр*:...}. Параметры диапазонов: 1) booking_date - Диапазон свободных дат для выбора жилья. from и to. Может применяться только для аренды жилья. 2) price_per_hour - Диапазон цены за час. from и/или to. Может применяться к жилью, транспорту, турам, экскурсиям. 3) price_per_day - Диапазон цены за день. from и/или to. Может применяться к жилью, транспорту, турам. 4) price_per_tour - Диапазон цены за тур. from и/или to. Может применяться к турам. 5) price_per_excursion - Диапазон цены за экскурсию. from и/или to. Может применяться к экскурсиям. 6) average_bill - Диапазон среднего счета для развлечений. from и/или to. Может применяться к развлечениям.
     *
     * @tags site-user-tour-ads
     * @name SiteAdsTourList
     * @request GET:/site/ads/tour/
     * @secure
     */
    siteAdsTourList: (
      query?: {
        /** tour_type */
        tour_type?: string;
        /** with_guide */
        with_guide?: string;
        /** is_last_minute_tour */
        is_last_minute_tour?: string;
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: UserAdList[];
        },
        any
      >({
        path: `/site/ads/tour/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра аренды жилья.
     *
     * @tags site-user-tour-ads
     * @name SiteAdsTourRead
     * @request GET:/site/ads/tour/{id}/
     * @secure
     */
    siteAdsTourRead: (id: number, params: RequestParams = {}) =>
      this.request<TourAdUser, any>({
        path: `/site/ads/tour/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Создание отзыва.
     *
     * @tags site-user-tour-ads
     * @name SiteAdsTourAddFeedback
     * @request POST:/site/ads/tour/{id}/add_feedback/
     * @secure
     */
    siteAdsTourAddFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/tour/${id}/add_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удаление отзыва.
     *
     * @tags site-user-tour-ads
     * @name SiteAdsTourDeleteFeedback
     * @request POST:/site/ads/tour/{id}/delete_feedback/
     * @secure
     */
    siteAdsTourDeleteFeedback: (id: number, data: FeedbackPhotoDelete, params: RequestParams = {}) =>
      this.request<FeedbackPhotoDelete, any>({
        path: `/site/ads/tour/${id}/delete_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Редактирование отзыва.
     *
     * @tags site-user-tour-ads
     * @name SiteAdsTourEditFeedback
     * @request POST:/site/ads/tour/{id}/edit_feedback/
     * @secure
     */
    siteAdsTourEditFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/tour/${id}/edit_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра аренды жилья.
     *
     * @tags site-user-tour-ads
     * @name SiteAdsTourIncreaseViewCount
     * @request POST:/site/ads/tour/{id}/increase_view_count/
     * @secure
     */
    siteAdsTourIncreaseViewCount: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/tour/${id}/increase_view_count/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Добавление/удаление объявления из избранного.
     *
     * @tags site-user-tour-ads
     * @name SiteAdsTourIsFavorite
     * @request POST:/site/ads/tour/{id}/is_favorite/
     * @secure
     */
    siteAdsTourIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/tour/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по аренде транспорта.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsTransportBookingCreate
     * @request POST:/site/ads/transport-booking/
     * @secure
     */
    siteAdsTransportBookingCreate: (data: TransportAdBookingWrite, params: RequestParams = {}) =>
      this.request<TransportAdBookingWrite, any>({
        path: `/site/ads/transport-booking/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по аренде транспорта.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsTransportBookingUpdate
     * @request PUT:/site/ads/transport-booking/{id}/
     * @secure
     */
    siteAdsTransportBookingUpdate: (id: number, data: TransportAdBookingWrite, params: RequestParams = {}) =>
      this.request<TransportAdBookingWrite, any>({
        path: `/site/ads/transport-booking/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по аренде транспорта.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsTransportBookingPartialUpdate
     * @request PATCH:/site/ads/transport-booking/{id}/
     * @secure
     */
    siteAdsTransportBookingPartialUpdate: (id: number, data: TransportAdBookingWrite, params: RequestParams = {}) =>
      this.request<TransportAdBookingWrite, any>({
        path: `/site/ads/transport-booking/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет операций с бронями по аренде транспорта.
     *
     * @tags site-business-transport-ads
     * @name SiteAdsTransportBookingDelete
     * @request DELETE:/site/ads/transport-booking/{id}/
     * @secure
     */
    siteAdsTransportBookingDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/transport-booking/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Получение списка выбранного типа объявлений. Доступно всем пользователям. Помимо описанных параметров реализованы фильтрация по диапазону. Выполняет с помощью параметра ?range_filter={*параметр*:{"from":*знач*, "to":*знач*}, *параметр*:...}. Параметры диапазонов: 1) booking_date - Диапазон свободных дат для выбора жилья. from и to. Может применяться только для аренды жилья. 2) price_per_hour - Диапазон цены за час. from и/или to. Может применяться к жилью, транспорту, турам, экскурсиям. 3) price_per_day - Диапазон цены за день. from и/или to. Может применяться к жилью, транспорту, турам. 4) price_per_tour - Диапазон цены за тур. from и/или to. Может применяться к турам. 5) price_per_excursion - Диапазон цены за экскурсию. from и/или to. Может применяться к экскурсиям. 6) average_bill - Диапазон среднего счета для развлечений. from и/или to. Может применяться к развлечениям.
     *
     * @tags site-user-transport-ads
     * @name SiteAdsTransportList
     * @request GET:/site/ads/transport/
     * @secure
     */
    siteAdsTransportList: (
      query?: {
        /** transport_type */
        transport_type?: string;
        /** rent_type */
        rent_type?: 'hourly' | 'daily';
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: UserAdList[];
        },
        any
      >({
        path: `/site/ads/transport/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра аренды транспорта.
     *
     * @tags site-user-transport-ads
     * @name SiteAdsTransportRead
     * @request GET:/site/ads/transport/{id}/
     * @secure
     */
    siteAdsTransportRead: (id: number, params: RequestParams = {}) =>
      this.request<RentTransportAdUser, any>({
        path: `/site/ads/transport/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Создание отзыва.
     *
     * @tags site-user-transport-ads
     * @name SiteAdsTransportAddFeedback
     * @request POST:/site/ads/transport/{id}/add_feedback/
     * @secure
     */
    siteAdsTransportAddFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/transport/${id}/add_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удаление отзыва.
     *
     * @tags site-user-transport-ads
     * @name SiteAdsTransportDeleteFeedback
     * @request POST:/site/ads/transport/{id}/delete_feedback/
     * @secure
     */
    siteAdsTransportDeleteFeedback: (id: number, data: FeedbackPhotoDelete, params: RequestParams = {}) =>
      this.request<FeedbackPhotoDelete, any>({
        path: `/site/ads/transport/${id}/delete_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Редактирование отзыва.
     *
     * @tags site-user-transport-ads
     * @name SiteAdsTransportEditFeedback
     * @request POST:/site/ads/transport/{id}/edit_feedback/
     * @secure
     */
    siteAdsTransportEditFeedback: (id: number, data: FeedbackWrite, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/ads/transport/${id}/edit_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра аренды транспорта.
     *
     * @tags site-user-transport-ads
     * @name SiteAdsTransportIncreaseViewCount
     * @request POST:/site/ads/transport/{id}/increase_view_count/
     * @secure
     */
    siteAdsTransportIncreaseViewCount: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/transport/${id}/increase_view_count/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Добавление/удаление объявления из избранного.
     *
     * @tags site-user-transport-ads
     * @name SiteAdsTransportIsFavorite
     * @request POST:/site/ads/transport/{id}/is_favorite/
     * @secure
     */
    siteAdsTransportIsFavorite: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/ads/transport/${id}/is_favorite/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Вью сет для просмотра статей
     *
     * @tags site-articles
     * @name SiteArticlesList
     * @request GET:/site/articles/
     * @secure
     */
    siteArticlesList: (
      query?: {
        /** topic__id */
        topic__id?: string;
        /** A search term. */
        search?: string;
        /** Which field to use when ordering the results. */
        ordering?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: ArticleSite[];
        },
        any
      >({
        path: `/site/articles/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вью сет для просмотра статей
     *
     * @tags site-articles
     * @name SiteArticlesRead
     * @request GET:/site/articles/{id}/
     * @secure
     */
    siteArticlesRead: (id: number, params: RequestParams = {}) =>
      this.request<ArticleSite, any>({
        path: `/site/articles/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Подтверждение смены email пользователя. Если ссылка в письме не просрочена, то происходит активация пользователя, статус меняется на 'active'. В противном случае возвращается ошибка 'Ссылка подтверждения Email недействительна'
     *
     * @tags site-auth
     * @name SiteAuthConfirmEmail
     * @request GET:/site/auth/confirm_email/
     * @secure
     */
    siteAuthConfirmEmail: (
      query: {
        /** @minLength 1 */
        uid: string;
        /** @minLength 1 */
        token: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/site/auth/confirm_email/`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Базовая авторизация пользователя по email/паролю. Если пользователь ввел пароль неверно в количестве N раз, то он блокируется (статус 'blocked') на N минут. Сброс пароля снимает блокировку.
     *
     * @tags site-auth
     * @name SiteAuthLogin
     * @request POST:/site/auth/login/
     * @secure
     */
    siteAuthLogin: (data: LoginUserData, params: RequestParams = {}) =>
      this.request<LoginUserData, any>({
        path: `/site/auth/login/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Обработка callback от провайдера, информации о пользователе и получение токена.
     *
     * @tags site-auth
     * @name SiteAuthOkCallback
     * @request GET:/site/auth/ok/callback/
     * @secure
     */
    siteAuthOkCallback: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/auth/ok/callback/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Авторизация пользователя через соц. сети редирект на провайдера.
     *
     * @tags site-auth
     * @name SiteAuthOkLogin
     * @request GET:/site/auth/ok/login/
     * @secure
     */
    siteAuthOkLogin: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/auth/ok/login/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Обмен refresh-токена на валидную пару access- и refresh-токенов.
     *
     * @tags site-auth
     * @name SiteAuthRefreshToken
     * @request POST:/site/auth/refresh_token/
     * @secure
     */
    siteAuthRefreshToken: (data: UserRefreshTokenData, params: RequestParams = {}) =>
      this.request<UserRefreshTokenData, any>({
        path: `/site/auth/refresh_token/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Регистрация пользователя. Валидация: 1) email 2) совпадение password и password_2 3) role: доступные значения - 'individual' (Физическое лицо), 'business' (Юридическое лицо) 4) is_privacy_policy_confirmed: обязательно True При отсутствии ошибок пользователь добавляется в БД со статусом 'waiting_register_confirmation', отправляется письмо со ссылкой подтверждения регистрации
     *
     * @tags site-auth
     * @name SiteAuthRegister
     * @request POST:/site/auth/register/
     * @secure
     */
    siteAuthRegister: (data: RegisterUserData, params: RequestParams = {}) =>
      this.request<RegisterUserData, any>({
        path: `/site/auth/register/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Подтверждение регистрации пользователя. Если ссылка в письме не просрочена, то происходит активация пользователя, статус меняется на 'active'. В противном случае возвращается ошибка 'Ссылка подтверждения регистрации недействительна'
     *
     * @tags site-auth
     * @name SiteAuthRegisterDone
     * @request GET:/site/auth/register_done/
     * @secure
     */
    siteAuthRegisterDone: (
      query: {
        /** @minLength 1 */
        uid: string;
        /** @minLength 1 */
        token: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/site/auth/register_done/`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Отправка письма на сброс/восстановление пароля. В письме содержится ссылка редиректа на сайт с переданными uid и token в get-параметрах, которые вместе с паролем и подтвержденным паролем отправить в боди на эндпойнт reset_password_done
     *
     * @tags site-auth
     * @name SiteAuthResetPassword
     * @request POST:/site/auth/reset_password/
     * @secure
     */
    siteAuthResetPassword: (data: ResetPasswordRequest, params: RequestParams = {}) =>
      this.request<ResetPasswordRequest, any>({
        path: `/site/auth/reset_password/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Восстановление пароля пользователя. Валидация: 1) совпадение password и password_2 2) обязательное наличие uid и token Если ссылка в письме, по которой должен пройти редирект на сайт, не просрочена, то происходит активация пользователя, статус меняется на 'active', количество неуспешных попыток ввести пароль и время блокировки сбрасывается. В противном случае возвращается ошибка 'Ссылка сброса пароля недействительна'
     *
     * @tags site-auth
     * @name SiteAuthResetPasswordDone
     * @request POST:/site/auth/reset_password_done/
     * @secure
     */
    siteAuthResetPasswordDone: (data: ResetPasswordData, params: RequestParams = {}) =>
      this.request<ResetPasswordData, any>({
        path: `/site/auth/reset_password_done/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Обработка callback от провайдера, информации о пользователе и получение токена.
     *
     * @tags site-auth
     * @name SiteAuthVkCallback
     * @request GET:/site/auth/vk/callback/
     * @secure
     */
    siteAuthVkCallback: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/auth/vk/callback/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Авторизация пользователя через соц. сети редирект на провайдера.
     *
     * @tags site-auth
     * @name SiteAuthVkLogin
     * @request GET:/site/auth/vk/login/
     * @secure
     */
    siteAuthVkLogin: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/auth/vk/login/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Обработка callback от провайдера, информации о пользователе и получение токена.
     *
     * @tags site-auth
     * @name SiteAuthYandexCallback
     * @request GET:/site/auth/yandex/callback/
     * @secure
     */
    siteAuthYandexCallback: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/auth/yandex/callback/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Авторизация пользователя через соц. сети редирект на провайдера.
     *
     * @tags site-auth
     * @name SiteAuthYandexLogin
     * @request GET:/site/auth/yandex/login/
     * @secure
     */
    siteAuthYandexLogin: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/auth/yandex/login/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка предметов удобства.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesComfortItemsList
     * @request GET:/site/dictionaries/comfort-items/
     * @secure
     */
    siteDictionariesComfortItemsList: (params: RequestParams = {}) =>
      this.request<DictionarySite[], any>({
        path: `/site/dictionaries/comfort-items/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка валют.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesCurrencyList
     * @request GET:/site/dictionaries/currency/
     * @secure
     */
    siteDictionariesCurrencyList: (params: RequestParams = {}) =>
      this.request<CurrencySite[], any>({
        path: `/site/dictionaries/currency/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка формы одежды.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesDressCodeTypeList
     * @request GET:/site/dictionaries/dress-code-type/
     * @secure
     */
    siteDictionariesDressCodeTypeList: (params: RequestParams = {}) =>
      this.request<DictionarySite[], any>({
        path: `/site/dictionaries/dress-code-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка типов экскурсий.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesExcursionTypeList
     * @request GET:/site/dictionaries/excursion-type/
     * @secure
     */
    siteDictionariesExcursionTypeList: (params: RequestParams = {}) =>
      this.request<DictionarySite[], any>({
        path: `/site/dictionaries/excursion-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка типов жилья.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesHousingTypeList
     * @request GET:/site/dictionaries/housing-type/
     * @secure
     */
    siteDictionariesHousingTypeList: (params: RequestParams = {}) =>
      this.request<DictionarySite[], any>({
        path: `/site/dictionaries/housing-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка типов развлечений.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesRecreationTypeList
     * @request GET:/site/dictionaries/recreation-type/
     * @secure
     */
    siteDictionariesRecreationTypeList: (params: RequestParams = {}) =>
      this.request<DictionarySite[], any>({
        path: `/site/dictionaries/recreation-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка тем.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesTopicsList
     * @request GET:/site/dictionaries/topics/
     * @secure
     */
    siteDictionariesTopicsList: (params: RequestParams = {}) =>
      this.request<DictionarySite[], any>({
        path: `/site/dictionaries/topics/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка типов туров.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesTourTypeList
     * @request GET:/site/dictionaries/tour-type/
     * @secure
     */
    siteDictionariesTourTypeList: (params: RequestParams = {}) =>
      this.request<DictionarySite[], any>({
        path: `/site/dictionaries/tour-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет для просмотра списка типов транспорта.
     *
     * @tags site-dictionaries
     * @name SiteDictionariesTransportTypeList
     * @request GET:/site/dictionaries/transport-type/
     * @secure
     */
    siteDictionariesTransportTypeList: (params: RequestParams = {}) =>
      this.request<DictionarySite[], any>({
        path: `/site/dictionaries/transport-type/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет создания и удаления документа ЮЛ.
     *
     * @tags site-users
     * @name SiteDocumentsCreate
     * @request POST:/site/documents/
     * @secure
     */
    siteDocumentsCreate: (
      data: {
        /** @format binary */
        file: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<BusinessUserFileWrite, any>({
        path: `/site/documents/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет создания и удаления документа ЮЛ.
     *
     * @tags site-users
     * @name SiteDocumentsDelete
     * @request DELETE:/site/documents/{id}/
     * @secure
     */
    siteDocumentsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/documents/${id}/`,
        method: 'DELETE',
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Вьюсет получения списка избранных объявлений пользователя.
     *
     * @tags site-favorites
     * @name SiteFavoritesList
     * @request GET:/site/favorites/
     * @secure
     */
    siteFavoritesList: (params: RequestParams = {}) =>
      this.request<UserAdList[], any>({
        path: `/site/favorites/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с отзывами в ЛК бизнес-клиента.
     *
     * @tags site-feedbacks
     * @name SiteFeedbackList
     * @request GET:/site/feedback/
     * @secure
     */
    siteFeedbackList: (
      query?: {
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: FeedbackRead[];
        },
        any
      >({
        path: `/site/feedback/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет работы с отзывами в ЛК бизнес-клиента.
     *
     * @tags site-feedbacks
     * @name SiteFeedbackRead
     * @request GET:/site/feedback/{id}/
     * @secure
     */
    siteFeedbackRead: (id: number, params: RequestParams = {}) =>
      this.request<FeedbackRead, any>({
        path: `/site/feedback/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Правила использования cookie.
     *
     * @tags site-flatpages
     * @name SiteFlatpagesCookiePolicy
     * @request GET:/site/flatpages/cookie_policy/
     * @secure
     */
    siteFlatpagesCookiePolicy: (params: RequestParams = {}) =>
      this.request<FlatPage[], any>({
        path: `/site/flatpages/cookie_policy/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Политика конфиденциальности.
     *
     * @tags site-flatpages
     * @name SiteFlatpagesPrivacyPolicy
     * @request GET:/site/flatpages/privacy_policy/
     * @secure
     */
    siteFlatpagesPrivacyPolicy: (params: RequestParams = {}) =>
      this.request<FlatPage[], any>({
        path: `/site/flatpages/privacy_policy/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Публичная оферта.
     *
     * @tags site-flatpages
     * @name SiteFlatpagesPublicOffer
     * @request GET:/site/flatpages/public_offer/
     * @secure
     */
    siteFlatpagesPublicOffer: (params: RequestParams = {}) =>
      this.request<FlatPage[], any>({
        path: `/site/flatpages/public_offer/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Правила пользования сайтом.
     *
     * @tags site-flatpages
     * @name SiteFlatpagesSiteRules
     * @request GET:/site/flatpages/site_rules/
     * @secure
     */
    siteFlatpagesSiteRules: (params: RequestParams = {}) =>
      this.request<FlatPage[], any>({
        path: `/site/flatpages/site_rules/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Пользовательское соглашение.
     *
     * @tags site-flatpages
     * @name SiteFlatpagesUserAgreement
     * @request GET:/site/flatpages/user_agreement/
     * @secure
     */
    siteFlatpagesUserAgreement: (params: RequestParams = {}) =>
      this.request<FlatPage[], any>({
        path: `/site/flatpages/user_agreement/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Текущие данные пользователя. Для неавторизованного пользователя возвращает пустые данные. role: роль пользователя в системе 1) 'individual', 'Физическое лицо' 2) 'business', 'Юридическое лицо' 3) 'owner', 'Владелец' 4) 'deputy_owner', 'Заместитель владельца' 5) 'admin', 'Администратор' 6) 'moderator', 'Модератор' 7) 'unknown', 'Не авторизован' status: статус пользователя в системе 1) 'waiting_register_confirmation', 'Ждет подтверждения регистрации' 2) 'active', 'Активен' 3) 'blocked', 'Заблокирован' 4) 'waiting_mail_confirmation', 'Ждет подтверждения email' moderation_status: статус модерации данных пользователя 1) 'preparation', 'Подготовка к модерации' 2) 'waiting', 'Ожидание модерации' 3) 'rejected', 'Модерация отклонена' 4) 'approved', 'Модерация подтверждена'
     *
     * @tags site-users
     * @name SiteMe
     * @request GET:/site/me/
     * @secure
     */
    siteMe: (params: RequestParams = {}) =>
      this.request<UserInfo, any>({
        path: `/site/me/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вью сет для просмотра новостей
     *
     * @tags site-news
     * @name SiteNewsList
     * @request GET:/site/news/
     * @secure
     */
    siteNewsList: (
      query?: {
        /** A search term. */
        search?: string;
        /** Which field to use when ordering the results. */
        ordering?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: NewsSite[];
        },
        any
      >({
        path: `/site/news/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вью сет для просмотра новостей
     *
     * @tags site-news
     * @name SiteNewsRead
     * @request GET:/site/news/{id}/
     * @secure
     */
    siteNewsRead: (id: number, params: RequestParams = {}) =>
      this.request<NewsSite, any>({
        path: `/site/news/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет уведомлений в личном кабинете.
     *
     * @tags site-notifications
     * @name SiteNotificationsList
     * @request GET:/site/notifications/
     * @secure
     */
    siteNotificationsList: (
      query?: {
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        count?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: NotificationList[];
        },
        any
      >({
        path: `/site/notifications/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Смена статуса уведомления на прочитано при просмотре.
     *
     * @tags site-notifications
     * @name SiteNotificationsRead
     * @request GET:/site/notifications/{id}/
     * @secure
     */
    siteNotificationsRead: (id: number, params: RequestParams = {}) =>
      this.request<NotificationDetail, any>({
        path: `/site/notifications/${id}/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Софт-удаление уведомления.
     *
     * @tags site-notifications
     * @name SiteNotificationsDelete
     * @request DELETE:/site/notifications/{id}/
     * @secure
     */
    siteNotificationsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/notifications/${id}/`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Подписка/отписка от уведомлений.
     *
     * @tags site-subscribe
     * @name SiteSubscribe
     * @request POST:/site/subscribe/
     * @secure
     */
    siteSubscribe: (data: Subscribe, params: RequestParams = {}) =>
      this.request<Subscribe, any>({
        path: `/site/subscribe/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Создание запроса в поддержку. Если пользователь не авторизован, email обязательный (наличие проверяется на бэке, если отсутствует - возвращается ошибка). Если пользователь авторизован, email не обязательный, определяется на бэке.
     *
     * @tags site-support
     * @name SiteSupportCreate
     * @request POST:/site/support/
     * @secure
     */
    siteSupportCreate: (data: RegisterSupportRequest, params: RequestParams = {}) =>
      this.request<RegisterSupportRequest, any>({
        path: `/site/support/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Смена роли пользователя. Доступно только для ролей 'individual' и 'business'. Роль сотрудников меняется только в админке, при попытке возвращается 400.
     *
     * @tags site-users
     * @name SiteUsersChangeRole
     * @request POST:/site/users/change_role/
     * @secure
     */
    siteUsersChangeRole: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/users/change_role/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Отправка заявки на модерацию данных пользователя. Доступно только для ролей 'individual' и 'business'. При запросе проверяется заполненность обязательных полей, при отсутствии таковых возвращается список полей к заполнению. При успешном создании заявки на модерацию, статус модерации меняется на 'waiting' (Ожидание модерации)
     *
     * @tags site-users
     * @name SiteUsersSendForModeration
     * @request POST:/site/users/send_for_moderation/
     * @secure
     */
    siteUsersSendForModeration: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/users/send_for_moderation/`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * @description Получение данных пользователя в личном кабинете. Доступ есть только у зарегистрированных пользователей и только к своим данным. Для ФЛ - основная информация и физический адрес, для ЮЛ - основная информация, физический адрес, юридический адрес, бизнес-инфо, прикрепленные документы. email_confirmed: bool (email подтвержден) role: роль пользователя в системе 1) 'individual', 'Физическое лицо' 2) 'business', 'Юридическое лицо' 3) 'owner', 'Владелец' 4) 'deputy_owner', 'Заместитель владельца' 5) 'admin', 'Администратор' 6) 'moderator', 'Модератор' status: статус пользователя в системе 1) 'waiting_register_confirmation', 'Ждет подтверждения регистрации' 2) 'active', 'Активен' 3) 'blocked', 'Заблокирован' 4) 'waiting_mail_confirmation', 'Ждет подтверждения email' moderation_status: статус модерации данных пользователя 1) 'preparation', 'Подготовка к модерации' 2) 'waiting', 'Ожидание модерации' 3) 'rejected', 'Модерация отклонена' 4) 'approved', 'Модерация подтверждена' Если moderation_status: 'waiting' (Ожидание модерации), то данные пользователя необходимо заблокировать для редактирования.
     *
     * @tags site-users
     * @name SiteUsersRead
     * @request GET:/site/users/{id}/
     * @secure
     */
    siteUsersRead: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/site/users/${id}/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Обновление данных пользователя. Для ФЛ - основная информация и физический адрес, для ЮЛ - основная информация, физический адрес, юридический адрес, бизнес-инфо. При запросе проверяется изменение обязательных полей для модерации, если данные менялись, то статус модерации меняется на 'preparation' (Подготовка к модерации), и пользователю необходимо заново отправить заявку на модерацию.
     *
     * @tags site-users
     * @name SiteUsersUpdate
     * @request PUT:/site/users/{id}/
     * @secure
     */
    siteUsersUpdate: (id: number, data: BusinessUserWrite, params: RequestParams = {}) =>
      this.request<BusinessUserWrite, any>({
        path: `/site/users/${id}/`,
        method: 'PUT',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Вьюсет просмотра и редактирования данных пользователя.
     *
     * @tags site-users
     * @name SiteUsersPartialUpdate
     * @request PATCH:/site/users/{id}/
     * @secure
     */
    siteUsersPartialUpdate: (id: number, data: BusinessUserWrite, params: RequestParams = {}) =>
      this.request<BusinessUserWrite, any>({
        path: `/site/users/${id}/`,
        method: 'PATCH',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
