import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import * as Pickers from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

window.MaterialUI = {
  Core,
  Lab,
	DateFnsUtils,
	Pickers,
  Styles: { ThemeProvider, createMuiTheme },
};
