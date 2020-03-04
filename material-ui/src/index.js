import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import * as Pickers from '@material-ui/pickers';
import { useDropzone } from 'react-dropzone';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
  Cancel,
  Close,
  Save,
  Delete,
  ExpandMore,
  FilterList,
  Search,
  FileCopy,
  Email,
  GetApp,
} from '@material-ui/icons';

window.MaterialUI = {
  Core,
  Lab,
  DateFnsUtils,
  Pickers,
  Styles: { ThemeProvider, createMuiTheme },
  Icons: {
    Cancel,
    Close,
    Save,
    Delete,
    ExpandMore,
    FilterList,
    Search,
    FileCopy,
    Email,
    GetApp,
  },
  useDropzone,
};
