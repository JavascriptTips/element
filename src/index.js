/* Automatic generated by './build/bin/build-entry.js' */

import Pagination from '../packages/pagination';
import Dialog from '../packages/dialog';
import Autocomplete from '../packages/autocomplete';
import Dropdown from '../packages/dropdown';
import DropdownMenu from '../packages/dropdown-menu';
import DropdownItem from '../packages/dropdown-item';
import Menu from '../packages/menu';
import Submenu from '../packages/submenu';
import MenuItem from '../packages/menu-item';
import MenuItemGroup from '../packages/menu-item-group';
import Input from '../packages/input';
import InputNumber from '../packages/input-number';
import Radio from '../packages/radio';
import RadioGroup from '../packages/radio-group';
import RadioButton from '../packages/radio-button';
import Checkbox from '../packages/checkbox';
import CheckboxGroup from '../packages/checkbox-group';
import Switch from '../packages/switch';
import Select from '../packages/select';
import Option from '../packages/option';
import OptionGroup from '../packages/option-group';
import Button from '../packages/button';
import ButtonGroup from '../packages/button-group';
import Table from '../packages/table';
import TableColumn from '../packages/table-column';
import DatePicker from '../packages/date-picker';
import TimeSelect from '../packages/time-select';
import TimePicker from '../packages/time-picker';
import Popover from '../packages/popover';
import Tooltip from '../packages/tooltip';
import MessageBox from '../packages/message-box';
import Breadcrumb from '../packages/breadcrumb';
import BreadcrumbItem from '../packages/breadcrumb-item';
import Form from '../packages/form';
import FormItem from '../packages/form-item';
import Tabs from '../packages/tabs';
import TabPane from '../packages/tab-pane';
import Tag from '../packages/tag';
import Tree from '../packages/tree';
import Alert from '../packages/alert';
import Notification from '../packages/notification';
import Slider from '../packages/slider';
import Loading from '../packages/loading';
import Icon from '../packages/icon';
import Row from '../packages/row';
import Col from '../packages/col';
import Upload from '../packages/upload';
import Progress from '../packages/progress';
import Spinner from '../packages/spinner';
import Message from '../packages/message';
import Badge from '../packages/badge';
import Card from '../packages/card';
import Rate from '../packages/rate';
import Steps from '../packages/steps';
import Step from '../packages/step';
import Carousel from '../packages/carousel';
import Scrollbar from '../packages/scrollbar';
import CarouselItem from '../packages/carousel-item';
import Collapse from '../packages/collapse';
import CollapseItem from '../packages/collapse-item';
import SwitchingTabs from '../packages/switching-tabs';
import JdateTimePicker from '../packages/jdate-time-picker';
import PairTabs from '../packages/pair-tabs';
import locale from 'element-ui/src/locale';

const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;
  locale.use(opts.locale);

  Vue.component(Pagination.name, Pagination);
  Vue.component(Dialog.name, Dialog);
  Vue.component(Autocomplete.name, Autocomplete);
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(DropdownMenu.name, DropdownMenu);
  Vue.component(DropdownItem.name, DropdownItem);
  Vue.component(Menu.name, Menu);
  Vue.component(Submenu.name, Submenu);
  Vue.component(MenuItem.name, MenuItem);
  Vue.component(MenuItemGroup.name, MenuItemGroup);
  Vue.component(Input.name, Input);
  Vue.component(InputNumber.name, InputNumber);
  Vue.component(Radio.name, Radio);
  Vue.component(RadioGroup.name, RadioGroup);
  Vue.component(RadioButton.name, RadioButton);
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
  Vue.component(Switch.name, Switch);
  Vue.component(Select.name, Select);
  Vue.component(Option.name, Option);
  Vue.component(OptionGroup.name, OptionGroup);
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
  Vue.component(Table.name, Table);
  Vue.component(TableColumn.name, TableColumn);
  Vue.component(DatePicker.name, DatePicker);
  Vue.component(TimeSelect.name, TimeSelect);
  Vue.component(TimePicker.name, TimePicker);
  Vue.component(Popover.name, Popover);
  Vue.component(Tooltip.name, Tooltip);
  Vue.component(Breadcrumb.name, Breadcrumb);
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
  Vue.component(Tabs.name, Tabs);
  Vue.component(TabPane.name, TabPane);
  Vue.component(Tag.name, Tag);
  Vue.component(Tree.name, Tree);
  Vue.component(Alert.name, Alert);
  Vue.component(Slider.name, Slider);
  Vue.component(Icon.name, Icon);
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
  Vue.component(Upload.name, Upload);
  Vue.component(Progress.name, Progress);
  Vue.component(Spinner.name, Spinner);
  Vue.component(Badge.name, Badge);
  Vue.component(Card.name, Card);
  Vue.component(Rate.name, Rate);
  Vue.component(Steps.name, Steps);
  Vue.component(Step.name, Step);
  Vue.component(Carousel.name, Carousel);
  Vue.component(Scrollbar.name, Scrollbar);
  Vue.component(CarouselItem.name, CarouselItem);
  Vue.component(Collapse.name, Collapse);
  Vue.component(CollapseItem.name, CollapseItem);
  Vue.component(SwitchingTabs.name, SwitchingTabs);
  Vue.component(JdateTimePicker.name, JdateTimePicker);
  Vue.component(PairTabs.name, PairTabs);

  Vue.use(Loading.directive);

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '1.2.37',
  locale: locale.use,
  install,
  Loading,
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  MessageBox,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Notification,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Message,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  SwitchingTabs,
  JdateTimePicker,
  PairTabs
};
