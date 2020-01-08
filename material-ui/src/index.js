import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
window.MaterialUI = {
  Core,
  Lab,
  Styles: { ThemeProvider, createMuiTheme },
};
